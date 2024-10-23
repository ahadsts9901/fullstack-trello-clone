import { Router } from "express"
import { register, login } from '../controllers/user.mjs'
import { body } from 'express-validator'
import { validate } from '../handlers/validation.mjs'
import { verifyToken } from '../handlers/tokenHandler.mjs'
import userModel from '../models/user.mjs'

const router = Router()

router.post(
  '/signup',
  body('username').isLength({ min: 8 }).withMessage(
    'username must be at least 8 characters'
  ),
  body('password').isLength({ min: 8 }).withMessage(
    'password must be at least 8 characters'
  ),
  body('confirmPassword').isLength({ min: 8 }).withMessage(
    'confirmPassword must be at least 8 characters'
  ),
  body('username').custom(value => {
    return userModel.findOne({ username: value }).then(user => {
      if (user) {
        return Promise.reject('username already used')
      }
    })
  }),
  validate,
  register
)

router.post(
  '/login',
  body('username').isLength({ min: 8 }).withMessage(
    'username must be at least 8 characters'
  ),
  body('password').isLength({ min: 8 }).withMessage(
    'password must be at least 8 characters'
  ),
  validate,
  login
)

router.post(
  '/verify-token',
  verifyToken,
  (req, res) => {
    res.status(200).json({ user: req.user })
  }
)

export default router