import bcrypt from 'bcrypt';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';


export const signup = async (req , res) => {
    try{
        const {name , email , password} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
             return res.status(400).json({ message: 'User already registered with this email.' });
        }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
    }
    catch(error){
        console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error during signup.' });
    }
};


export const login = async (req , res) => {
    try{
        const {email , password} = req.body;

         const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const payload = {
      userId: user._id,
      email: user.email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '4h' });
    res.json({ token, message: 'Login successful!' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login.' });
  }
};