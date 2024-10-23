import { Router } from 'express'
import { param } from 'express-validator'
import { isObjectId, validate } from '../handlers/validation.mjs'
import { verifyToken } from '../handlers/tokenHandler.mjs'
import { create, getAll, updatePosition, getFavourites, updateFavouritePosition, getOne, update, _delete } from '../controllers/board.mjs'

const router = Router()

router.post(
  '/',
  verifyToken,
  create
)

router.get(
  '/',
  verifyToken,
  getAll
)

router.put(
  '/',
  verifyToken,
  updatePosition
)

router.get(
  '/favourites',
  verifyToken,
  getFavourites
)

router.put(
  '/favourites',
  verifyToken,
  updateFavouritePosition
)

router.get(
  '/:boardId',
  param('boardId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  getOne
)

router.put(
  '/:boardId',
  param('boardId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  update
)

router.delete(
  '/:boardId',
  param('boardId').custom(value => {
    if (!isObjectId(value)) {
      return Promise.reject('invalid id')
    } else return Promise.resolve()
  }),
  validate,
  verifyToken,
  _delete
)


export default router