const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Add Job
router.post('/', async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.status(201).send(newJob);
});

// Get All Jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Update Status
router.put('/:id', async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedJob);
});

// Delete Job
router.delete('/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;

