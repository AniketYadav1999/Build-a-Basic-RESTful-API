import express from 'express';
import { getusers,createpostuser,getuser,deleteuser,patchupdate } from '../controllers/users';
const router=express.Router();


router.get('/',getusers);

router.post('/',createpostuser);

router.get('/:id',getuser)

router.delete("/:id",deleteuser)

router.patch("/:id",patchupdate)

export default router;