import {Router} from "express"
import { param } from 'express-validator'
import { verifyToken } from '../handlers/tokenHandler.mjs'
import { create, update, _delete } from '../controllers/section.mjs'
import { isObjectId, validate } from '../handlers/validation.mjs'

const router = Router()

router.post(
  '/',
  param('boardId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  create
)

router.put(
  '/:sectionId',
  param('boardId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  param('sectionId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid section id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  update
)

router.delete(
  '/:sectionId',
  param('boardId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  param('sectionId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid section id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  _delete
)

export default router