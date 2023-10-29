import  express  from "express";
import {registerController} from '../controllers/authController.js'
import { loginController } from "../controllers/authController.js";

//route
const router = express.Router()
//routing 
//REGISTER || post method => 1st 
 router.post('/register', registerController);


 //LOGIN 
 router.post('/login' , loginController);

export default router 