import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Email is not valid"
    ]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false
  },
  fullName: {
    type: String,
    required: [true, "Full Name is required"],
    minLength: [3, "Full Name must be at least 3 characters"],
    maxLength: [50, "Full Name must be at most 50 characters"]
  }
});

const User = models.User || model('User', userSchema);
export default User;