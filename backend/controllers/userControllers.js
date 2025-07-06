import bcrypt from 'bcryptjs' // make sure this is installed: npm install bcryptjs
import User from '../models/userModels.js'

export const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      gender,
      address,
      password,
      confirmPassword,
    } = req.body

    // Validate all fields
    if (
      !fullName ||
      !email ||
      !phone ||
      !gender ||
      !address ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' })
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // 🔐 HASH the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Save new user with hashed password
    const user = new User({
      fullName,
      email,
      phone,
      gender,
      address,
      password: hashedPassword,
    })

    await user.save()

    res.status(201).json({
      message: 'User registered successfully',
      userId: user._id,
    })
  } catch (error) {
    console.error('Registration Error:', error)
    res.status(500).json({ message: 'Server Error' })
  }
}
