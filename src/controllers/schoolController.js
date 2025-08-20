const schoolModel = require("../models/SchoolModel");
const { calculateDistance } = require("../utils/distance");

const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const schoolId = await schoolModel.addSchool({
      name,
      address,
      latitude,
      longitude,
    });

    res.status(201).json({ message: "School added successfully", id: schoolId });
  } catch (err) {
    console.error("Error adding school:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ error: "Latitude and Longitude are required in query" });
    }

    const schools = await schoolModel.getAllSchools();

    const schoolsWithDistance = schools.map((school) => {
      const distance = calculateDistance(
        latitude,
        longitude,
        school.latitude,
        school.longitude
      );
      return { ...school, distance };
    });

    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);
  } catch (err) {
    console.error("Error listing schools:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addSchool, listSchools };
