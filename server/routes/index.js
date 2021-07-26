import { Router } from 'express';

import * as controller from '../controllers';

const router = Router();

router.post('/add-book', controller.createNewBook);

export default router;
