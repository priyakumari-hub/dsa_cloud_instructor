# 🧠 Cloud & DSA AI Instructor

An AI-powered learning assistant that helps users learn **Cloud Computing, Data Structures, and Algorithms (DSA)** through simple and beginner-friendly explanations.

The application uses the **Google Gemini API** for AI-generated responses, **Flask** as the backend, and **HTML, CSS, and JavaScript** for the frontend.

---

## ✨ Features

- 💬 Interactive AI chat interface
- ☁️ Cloud Computing explanations
- 🧩 Data Structures explanations
- ⚡ Algorithms explanations
- 📊 Time and Space Complexity explanations
- 🔎 DSA problem-solving assistance
- 🤖 Google Gemini AI integration
- 🎨 Attractive and responsive user interface
- 🔐 Secure API key management using `.env`
- 🔄 Frontend-backend communication using JavaScript `fetch()`
- 🐍 Python Flask backend
- 📱 Responsive design for different screen sizes

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Python
- Flask

### AI

- Google Gemini API
- Google GenAI Python SDK

### Other Technologies

- REST API
- JSON
- python-dotenv
- Git
- GitHub

---

## 📁 Project Structure

```text
Cloud-DSA-Instructor/
│
├── app.py
├── requirements.txt
├── .gitignore
├── .env.example
├── README.md
│
├── templates/
│   └── index.html
│
└── static/
    ├── css/
    │   └── style.css
    │
    └── js/
        └── script.js
```

---


## 🧠 AI Instructor Behavior

The AI instructor is designed to focus on:

- Cloud Computing
- Data Structures
- Algorithms

The system instruction tells the AI to explain concepts in a simple and beginner-friendly way.

For example:

```text
User:
What is Binary Search?

AI:
Binary Search is an efficient searching algorithm used
to find an element in a sorted array.

Instead of checking every element one by one, it repeatedly
divides the search space into two halves.
```

If the user asks an unrelated question, the instructor politely redirects the user toward its supported topics.

Example:

```text
User:
Who is the President of India?

AI:
I am a Cloud Computing, Data Structure and Algorithm
instructor. Please ask something related to my field.
```

---


## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd Cloud-DSA-Instructor
```

---

### 2. Create a Virtual Environment

On Windows:

```bash
python -m venv venv
```

Activate the virtual environment:

```bash
venv\Scripts\activate
```

---

### 3. Install Dependencies

Install the required Python packages:

```bash
pip install -r requirements.txt
```

---

### 4. Configure the Gemini API Key

Create a `.env` file in the project root:

```text
Cloud-DSA-Instructor/
│
├── app.py
├── .env
└── ...
```

Add:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

---

## ▶️ Running the Application

Start the Flask server:

```bash
python app.py
```

After the server starts, open the application in your browser:

```text
http://127.0.0.1:5000
```

---

## 💡 Example Questions

You can ask questions such as:

```text
What is Cloud Computing?
```

```text
What are the types of cloud services?
```

```text
What is a Stack in DSA?
```

```text
Explain Queue with an example.
```

```text
What is Binary Search?
```

```text
Explain Linked List.
```

```text
What is Time Complexity?
```

```text
Explain Big O notation.
```

```text
What is a Binary Tree?
```

```text
Explain Sorting Algorithms.
```

---


## 🔒 Security

The Gemini API key is loaded from the `.env` file.

The application follows this approach:

```text
.env
  │
  ▼
Python / Flask
  │
  ▼
Gemini API
```

The API key is not written directly into the frontend.

The `.env` file is excluded from GitHub using `.gitignore`.

### Important Security Rule

Never expose your Gemini API key in:

- `index.html`
- `script.js`
- GitHub
- Screenshots
- Public repositories
- Client-side JavaScript

---

## 🎯 Project Objective

The objective of this project is to develop an AI-powered educational assistant that helps students understand Cloud Computing, Data Structures, and Algorithms using simple explanations.

The project combines:

- Web Development
- Python
- Flask
- REST API concepts
- JavaScript
- Artificial Intelligence
- Google Gemini API

---


## 🧪 Example Project Flow

```text
User enters:

"Explain Binary Search"
        │
        ▼
JavaScript fetch()
        │
        ▼
POST /api/chat
        │
        ▼
Flask receives message
        │
        ▼
Gemini API
        │
        ▼
AI generates explanation
        │
        ▼
Flask returns JSON
        │
        ▼
JavaScript receives response
        │
        ▼
Answer displayed in chat
```

---

## 📦 Requirements

The main dependencies are:

```text
Flask
google-genai
python-dotenv
```

They are listed in:

```text
requirements.txt
```

Install them using:

```bash
pip install -r requirements.txt
```

---

## 👩‍💻 Author

**Priya Kumari**

B.Tech Computer Science Engineering

---

## ⭐ Project Highlights

- 🤖 AI-powered educational assistant
- ☁️ Cloud Computing learning support
- 🧩 DSA learning support
- 🐍 Flask backend
- 🎨 Custom HTML/CSS/JavaScript frontend
- 🔌 REST-style API communication
- 🔐 Environment-based API key management
- 📱 Responsive user interface
- 🧠 Google Gemini integration

---

## 📜 License

This project is created for educational and development purposes.
