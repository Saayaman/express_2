const express = require('express');
const router = express.Router();

router.post('/students', async (req, res) => {

  try {
    const db = req.db;
    console.log(req.body)
    var student = await db.collection('students').insertOne(); 
    console.log(student)
    // res.send(student);
    // res.json(student)
  } catch(e){
    console.log(e)
  }
});

module.exports = router;