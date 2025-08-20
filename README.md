# 📚 School Management APIs

This project is an **assignment given by Educase India** to develop a set of **Node.js APIs** for managing school data.  
The system enables adding new schools and retrieving a list of schools sorted by proximity to a user-specified location.

---

## 🎯 Objective

- Build APIs using **Node.js**, **Express.js**, and **MySQL**.  
- Allow users to:
  1. **Add new schools** with details like name, address, latitude, and longitude.  
  2. **Retrieve schools** sorted by geographical proximity to the user's location.

---

## 🛠️ Requirements

### Database Setup
Create a `schools` table in MySQL with the following fields:

| Field      | Type      | Description                     |
|------------|-----------|---------------------------------|
| id         | INT (PK)  | Primary Key (Auto Increment)    |
| name       | VARCHAR   | School Name                    |
| address    | VARCHAR   | School Address                 |
| latitude   | FLOAT     | School Latitude (Geo Coordinate)|
| longitude  | FLOAT     | School Longitude (Geo Coordinate)|

---

## 🚀 API Development

### 1. Add School API
- **Endpoint:** `/addSchool`  
- **Method:** `POST`  
- **Payload:**  
  ```json
  {
    "name": "ABC Public School",
    "address": "New Delhi, India",
    "latitude": 28.6139,
    "longitude": 77.2090
  }


### 2. List Schools API
- **Endpoint:** `/listSchools`  
- **Method:** `GET`  
- **Parameters:**
  - `latitude` → User's latitude
  - `longitude` → User's longitude

- **Functionality:**
  - Fetches all schools from the database.
  - Calculates distance between the user’s location and each school.
  - Returns schools sorted by proximity (nearest first).



