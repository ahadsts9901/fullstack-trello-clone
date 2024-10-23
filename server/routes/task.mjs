import {Router} from "express"
import { param, body } from 'express-validator'
import { verifyToken } from '../handlers/tokenHandler.mjs'
import { isObjectId, validate } from '../handlers/validation.mjs'
import { create, updatePosition, _delete, update } from '../controllers/task.mjs'

const router = Router()

router.post(
  '/',
  param('boardId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  body('sectionId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid section id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  create
)

router.put(
  '/update-position',
  param('boardId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  updatePosition
)

router.delete(
  '/:taskId',
  param('boardId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  param('taskId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid task id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  _delete
)

router.put(
  '/:taskId',
  param('boardId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid board id')
    } else return Promise.resolve()
  }),
  param('taskId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid task id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  update
)

export default router