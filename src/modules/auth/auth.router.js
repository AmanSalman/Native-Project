import { Router } from "express";
import * as Controller from './auth.controller.js'
const router = Router();


router.get('/login', Controller.login)
router.get('/register', Controller.register)
export default router;