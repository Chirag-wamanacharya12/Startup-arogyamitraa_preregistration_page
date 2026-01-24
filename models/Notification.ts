import mongoose, { Schema, model, models } from 'mongoose';

const NotificationSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Notification = models.Notification || model('Notification', NotificationSchema);

export default Notification;
