const express = require('express');
const router = express.Router();

router.get('/students', async (req, res) => {

  try {
    const db = req.db;
    var student = await db.collection('students').find().toArray();
    console.log(student)
    res.json(student)
  } catch(e){
    console.log(e)
  }
});

module.exports = router;