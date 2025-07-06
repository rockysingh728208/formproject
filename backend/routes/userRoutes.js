// import express from 'express'
// import { registerUser } from '../controllers/userControllers.js'

// const router = express.Router()

// router.post('/register', registerUser)

// export default router



// routes/userRoutes.js
// import express from "express";
// import { registerUser } from "../controllers/userControllers.js";

// const router = express.Router();

// router.post("/register", registerUser);

// export default router;
// routes/userRoutes.js
import express from "express";
import { registerUser } from "../controllers/userControllers.js";

const router = express.Router();

// ✅ POST route to register user
router.post("/register", registerUser);

export default router;
