import mongoose, { Schema, model, models } from 'mongoose';

const PreregistrationSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Full Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, // Assuming one preregistration per email
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: ['patient', 'doctor', 'caregiver', 'organization'],
    default: 'patient',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Preregistration = models.Preregistration || model('Preregistration', PreregistrationSchema);

export default Preregistration;
