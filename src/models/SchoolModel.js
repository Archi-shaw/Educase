const db = require('../config/db').promise();  // use promise API

const addSchool = async (schoolData) => {
  const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  const [results] = await db.query(query, [
    schoolData.name,
    schoolData.address,
    schoolData.latitude,
    schoolData.longitude,
  ]);
  return results;
};

const getAllSchools = async () => {
  const query = 'SELECT * FROM schools';
  const [results] = await db.query(query);
  return results;
};

module.exports = {
  addSchool,
  getAllSchools,
};
