import { Router } from 'express'
import authRoutes from "./auth.mjs"
import boardRoutes from "./board.mjs"
import sectionRoutes from "./section.mjs"
import taskRoutes from "./task.mjs"

const router = Router()

router.use('/auth', authRoutes)
router.use('/boards', boardRoutes)
router.use('/boards/:boardId/sections', sectionRoutes)
router.use('/boards/:boardId/tasks', taskRoutes)

export default router;
