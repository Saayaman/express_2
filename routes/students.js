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


router.post('/students', async (req, res) => {

  try {
    const db = req.db;
    console.log("im body", req.body)
    db.collection('students').insertOne({...req.body}).then(response => {
      console.log("im response", response.ops[0])
      res.json(response.ops[0])
    })
    
  } catch(e){
    console.log(e)
  }
});

module.exports = router;