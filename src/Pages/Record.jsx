import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "../components/Hero.jsx";

const Record = ({ previousRecord, user }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    height: "",
    weight: "",
    bmi: "",
    bloodGroup: "",
    medicines: [{ name: "", dosage: "" }],
    files: [],
  });

  useEffect(() => {
    if (user) {
      fetchRecords();
    }
  }, [user]);

  // Fetch user records with Authorization header
  const fetchRecords = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/records/get", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      setRecords(response.data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };

    // Auto-calculate BMI
    if (name === "height" || name === "weight") {
      const heightInMeters = updatedFormData.height / 100;
      if (heightInMeters > 0 && updatedFormData.weight > 0) {
        updatedFormData.bmi = (updatedFormData.weight / (heightInMeters ** 2)).toFixed(2);
      } else {
        updatedFormData.bmi = "";
      }
    }

    setFormData(updatedFormData);
  };

  const handleMedicineChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMedicines = [...formData.medicines];
    updatedMedicines[index][name] = value;
    setFormData({ ...formData, medicines: updatedMedicines });
  };

  const addMedicineField = () => {
    setFormData({ ...formData, medicines: [...formData.medicines, { name: "", dosage: "" }] });
  };

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    const uploadedFiles = [];

    for (let file of files) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "your_cloudinary_preset"); // Replace with Cloudinary preset

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/process/upload",
          data
        );
        uploadedFiles.push(response.data.secure_url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }

    setFormData({ ...formData, files: [...formData.files, ...uploadedFiles] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please login first!");
      
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/records/post", 
        { ...formData }, 
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      toast.success("Record saved successfully!");
      setRecords([...records, response.data]);
      setFormVisible(false);
      setFormData({
        name: "",
        age: "",
        dob: "",
        height: "",
        weight: "",
        bmi: "",
        bloodGroup: "",
        medicines: [{ name: "", dosage: "" }],
        files: [],
      });
    } catch (error) {
      toast.error("Failed to save record!");
      console.error("Error saving record:", error);
    }
  };

  return (
    <div className="record-route">
      <Hero showParagraph={false} showImage={false} />

      {/* Show saved records */}
      {records.length > 0 ? (
        <div className="record-list">
          <h2>Your Records</h2>
          {records.map((record, index) => (
            <div key={index} className="record-item">
              <p><strong>Name:</strong> {record.name}</p>
              <p><strong>Age:</strong> {record.age}</p>
              <p><strong>BMI:</strong> {record.bmi}</p>
              <button onClick={() => setFormVisible(true)}>View Details</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No records found.</p>
      )}

      {!formVisible && (
        <button onClick={() => setFormVisible(true)}>Create New Record</button>
      )}

      {formVisible && (
        <form onSubmit={handleSubmit} className="record-form">
          <h2>Create Record</h2>
          <label>Name: <input type="text" name="name" value={formData.name} onChange={handleInputChange} required /></label>
          <label>Age: <input type="number" name="age" value={formData.age} onChange={handleInputChange} required /></label>
          <label>Date of Birth: <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required /></label>
          <label>Height (cm): <input type="number" name="height" value={formData.height} onChange={handleInputChange} required /></label>
          <label>Weight (kg): <input type="number" name="weight" value={formData.weight} onChange={handleInputChange} required /></label>
          <label>BMI: <input type="text" name="bmi" value={formData.bmi} readOnly /></label>
          <label>Blood Group: <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleInputChange} required /></label>

          <h3>Medicines</h3>
          {formData.medicines.map((medicine, index) => (
            <div key={index}>
              <label>Medicine Name: <input type="text" name="name" value={medicine.name} onChange={(e) => handleMedicineChange(index, e)} required /></label>
              <label>Dosage: <input type="text" name="dosage" value={medicine.dosage} onChange={(e) => handleMedicineChange(index, e)} required /></label>
            </div>
          ))}
          <button type="button" onClick={addMedicineField}>Add Medicine</button>

          <h3>Upload Files</h3>
          <input type="file" multiple accept="image/*,application/pdf" onChange={handleFileUpload} />

          <button type="submit">Save Record</button>
        </form>
      )}
    </div>
  );
};

export default Record;
