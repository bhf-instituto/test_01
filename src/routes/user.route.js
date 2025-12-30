import { Router } from 'express';
import { getAll, getUsers } from '../controllers/user.controller.js'

const router = Router();

router.route('/getall').get(getAll);

export default router;