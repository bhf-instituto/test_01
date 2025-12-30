import { Router } from 'express';
import { getAll, createUser } from '../controllers/user.controller.js'

const router = Router();

router.route('/getAll').get(getAll);
// router.route('/getByName').get(getByName);
router.route('/createUser').post(createUser);

export default router;