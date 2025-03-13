# 🌍 Cura Connect - Telehealth Frontend

![Cura Connect](https://your-image-url.com)

## 🚀 Cura Connect - Transforming Rural Healthcare Accessibility  

Cura Connect is an innovative **telehealth web application** built to **bridge the healthcare gap in rural India** by leveraging **Artificial Intelligence (AI)**, **Machine Learning (ML)**, and **real-time communication technologies**. The project aims to **enhance accessibility and affordability of healthcare services** in rural and remote areas by providing AI-driven **symptom checking, video consultations, multilingual support, and telemedicine features.**  

This repository contains the **frontend code** of the **Cura Connect** web application, built using **React, Redux, and Tailwind CSS.** It provides an intuitive user interface for **patients and doctors**, allowing seamless interaction between them for **efficient and timely medical assistance.**  

---

# 📋 Table of Contents  
- [Features](#features)  
- [Technology Stack](#-technology-stack)  
- [Installation and Setup](#-installation-and-setup)  
- [Project Structure](#-project-structure)  
- [Usage Guide](#-usage-guide)  
- [API Endpoints](#-api-endpoints)  
- [Screenshots](#-screenshots)  
- [Contributing](#-contributing)  
- [License](#-license)  
- [Contact](#-contact)  

---

## 🌟 Features  

### ✅ **User-Friendly Interface**
- Simple and **easy-to-navigate UI** designed for all literacy levels.  
- **Mobile-friendly design** using **Tailwind CSS** for a seamless experience across devices.  

### ✅ **AI-Powered Symptom Checker**
- AI and ML-based **symptom analysis** for quick and accurate health assessments.  
- Helps users **self-assess** conditions and understand potential health concerns.  

### ✅ **Doctor Recommendations**
- The system **automatically suggests nearby doctors** based on patient symptoms.  
- Ensures **timely medical consultations** for better health outcomes.  

### ✅ **Telehealth Video Consultations**  
- **Real-time video calls** enable remote consultations between doctors and patients.  
- Secure connection using **WebRTC** for high-quality virtual healthcare sessions.  

### ✅ **Automatic Translation & Multilingual Support**  
- **Real-time translation of text, audio, and video** for patients from diverse linguistic backgrounds.  
- Ensures effective communication between **healthcare providers and patients** across language barriers.  

### ✅ **Medication Reminders & Health Record Management**  
- Users can **set reminders** for their medication doses, ensuring they never miss a treatment.  
- **Health record storage** allows doctors to track patient history for better care.  

---

## 🏗️ Technology Stack  

| Technology     | Description |
|--------------|--------------|
| **Frontend Framework** | React.js |
| **State Management** | Redux Toolkit |
| **UI Library** | Tailwind CSS, Material UI |
| **Backend Integration** | Axios for API calls |
| **Routing** | React Router |
| **Real-time Features** | WebRTC for video calls |
| **Translation** | Google Translate API |
| **AI Features** | TensorFlow.js for AI-based symptom analysis |
| **Database Integration** | MongoDB, Firebase Authentication |

---

## 🔧 Installation and Setup  

Follow the steps below to set up the project on your local machine:  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/your-repo/Cura_Connect_Frontend.git
cd Cura_Connect_Frontend
```
### **2️⃣ Install Dependencies**
Ensure you have Node.js installed, then run:
```sh
npm install

```
### **3️⃣ Setup Environment Variables**
Create a .env file in the root directory and add the following:
```sh
REACT_APP_API_URL=http://localhost:8080/api
REACT_APP_SOCKET_URL=http://localhost:8080
```

### **4️⃣ Start the Development Server**
```sh 
npm start
```

---

## 📂 Project Structure

Cura_Connect_Frontend
│── public
│   ├── assets
│   │   ├── logo.png
│   ├── index.html
│── src
│   │── assets/
│   │── components/
│   │   │── Hero.js
│   │   │── Biography.js
│   │   │── Departments.js
│   │   │── MessageForm.js
│   │   │── AdminReplyForm.js
│   │   │── SymptomChecker.js
│   │── pages/
│   │   │── Home.js
│   │   │── Messages.js
│   │   │── Appointments.js
│   │   │── Login.js
│   │   │── Signup.js
│   │── context/
│   │── services/
│   │── styles/
│   │── App.js
│   │── index.js
│── .env
│── .gitignore
│── package.json
│── README.md



---
## 🎯 Usage Guide  

### 👤 User Features  

```js
// ✅ Register/Login as a Patient and Doctor
auth.registerUser({ name, email, password, role: "patient" });  // Patient Registration
auth.registerUser({ name, email, password, role: "doctor" });   // Doctor Registration
auth.loginUser({ email, password }); // User Login

// ✅ Book Appointments for online telehealth consultations
appointments.book({ userId, doctorId, date, time });

// ✅ AI-based Symptom Checker to assess initial conditions
const symptoms = ["fever", "cough", "fatigue"];
const diagnosis = AI.analyzeSymptoms(symptoms);
console.log(`Suggested Condition: ${diagnosis}`);

// ✅ View and access health records securely
const healthRecords = user.getHealthRecords(userId);
console.log(healthRecords);

// ✅ Receive and respond to messages (for both patients & doctors)
const messages = chat.getMessages(conversationId);
chat.sendMessage({ senderId, receiverId, text: "Hello Doctor, I need help!" });

// ✅ Real-time chat & video calls with doctors using WebRTC
const videoCall = WebRTC.initiateCall({ callerId, receiverId });
videoCall.start();

// ✅ Receive notifications for new messages & updates
notifications.subscribe(userId, (message) => {
  console.log(`New Notification: ${message}`);
});


### 🏥 Doctor Feature

// ✅ View patient queries and send responses
const patientQueries = queries.getAll();
queries.reply({ queryId, doctorId, response: "You need a consultation." });

// ✅ Manage and update appointments
appointments.update({ appointmentId, status: "confirmed" });
appointments.cancel({ appointmentId });

// ✅ Access patient health records securely
const patientRecords = healthRecords.get(userId);
console.log(patientRecords);

// ✅ Respond to patient concerns in real-time with AI assistance
const patientMessage = "I have a headache and nausea.";
const AIResponse = AI.analyzeSymptoms(patientMessage);
console.log(`AI Suggestion: ${AIResponse}`);

---


## 🤝How to make Contribution

We welcome contributions from developers of all skill levels! Whether you're fixing a bug, adding new features, or improving documentation, your help is appreciated. 

To contribute:

1. ⭐ Star the repository to show your support.
2. 📝 Create an issue outlining how you'd like to contribute to the project.
3. 🍴 Fork the repository to make your own copy:
   ```sh
   # Click on the "Fork" button at the top right of the repository page
4. 💻 Implement your changes in the forked repository by creating a new branch for your feature or fix:
   ```
   git checkout -b feature-or-fix-name
   ```
5. Make your changes and commit them using Conventional Commits:
   ```
   git commit -m "feat: describe your changes"
   ```
6. 🔄 Push your branch:
   ```
   git push origin feature-or-fix-name
   ```
7. Open a pull request and describe the changes you made, mentioning the issue number you're addressing.
8. ⏳ Wait for review and feedback from the maintainers.