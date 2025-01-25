import React, { useState } from "react";
import axios from "axios"; // For interacting with Cloudinary or API
import Hero from "../components/Hero.jsx";

const Record = ({ previousRecord }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    height: "",
    weight: "",
    bmi: "", // Added BMI field
    mobile: "",
    bloodGroup: "",
    medicalHistory: {
      allergies: false,
      chronicDiseases: false,
      surgeries: false,
      immunizations: false,
      customDetails: "",
    },
    habits: {
      smoking: false,
      alcohol: false,
      insurance: false,
    },
    medicines: [{ name: "", dosage: "" }],
    files: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };

    // Automatically calculate BMI when height and weight are entered
    if (name === "height" || name === "weight") {
      const heightInMeters = updatedFormData.height / 100;
      if (heightInMeters > 0 && updatedFormData.weight > 0) {
        const bmi = (updatedFormData.weight / (heightInMeters ** 2)).toFixed(2);
        updatedFormData.bmi = bmi;
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
    setFormData({
      ...formData,
      medicines: [...formData.medicines, { name: "", dosage: "" }],
    });
  };

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    const uploadedFiles = [];
    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "your_cloudinary_preset"); // Replace with your Cloudinary preset

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/your_cloud_name/upload", // Replace with your Cloudinary URL
          formData
        );
        uploadedFiles.push(response.data.secure_url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
    setFormData({ ...formData, files: [...formData.files, ...uploadedFiles] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Call API to save the record
  };

  return (
    <div className="record-route">
      <Hero showParagraph={false} showImage={false} />
      {!formVisible && previousRecord ? (
        <div className="record-details">
          <h2>Previous Record</h2>
          <p><strong>Name:</strong> {previousRecord.name}</p>
          <p><strong>Age:</strong> {previousRecord.age}</p>
          <p><strong>Date of Birth:</strong> {previousRecord.dob}</p>
          <p><strong>Height:</strong> {previousRecord.height} cm</p>
          <p><strong>Weight:</strong> {previousRecord.weight} kg</p>
          <p><strong>BMI:</strong> {previousRecord.bmi}</p>
          <h3>Medicines:</h3>
          {previousRecord.medicines.map((med, index) => (
            <p key={index}>{med.name} - {med.dosage}</p>
          ))}
        </div>
      ) : !formVisible ? (
        <p>No record found</p>
      ) : null}

      {!formVisible && (
        <button onClick={() => setFormVisible(true)}>Create New Record</button>
      )}

      {formVisible && (
        <form onSubmit={handleSubmit} className="record-form">
          <h2>Create Record</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Height (cm):
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Weight (kg):
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            BMI:
            <input
              type="text"
              name="bmi"
              value={formData.bmi}
              readOnly
            />
          </label>
          
 <label>
            Blood Group:
            <input
              type="text"
              name="bloodGroup"
              placeholder="e.g A+"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              required
            />
          </label>

    


         

      

          <h3>Medicines</h3>
          {formData.medicines.map((medicine, index) => (
            <div key={index}>
              <label>
                Medicine Name:
                <input
                  type="text"
                  name="name"
                  value={medicine.name}
                  onChange={(e) => handleMedicineChange(index, e)}
                  required
                />
              </label>
              <label>
                Dosage:
                <input
                  type="text"
                  name="dosage"
                  value={medicine.dosage}
                  placeholder="e.g. 3 tablet daily "
                  onChange={(e) => handleMedicineChange(index, e)}
                  required
                />
              </label>
            </div>
          ))}
          <button type="button" onClick={addMedicineField}>
            Add Another Medicine
          </button>

          <h3>Upload Files (Images or PDFs)</h3>
          <input
            type="file"
            multiple
            accept="image/*,application/pdf"
            onChange={handleFileUpload}
          />

          <button type="submit">Save Record</button>
        </form>
      )}
    </div>
  );
};

export default Record;
