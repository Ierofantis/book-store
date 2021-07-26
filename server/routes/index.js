import { Router } from 'express';

import * as controller from '../controllers';
import { schemas } from "../middlewares/schemas";
import { SchemaValidator } from "../middlewares/SchemaValidator";

const router = Router();

router.post('/add-book', SchemaValidator(schemas.book, 'body'), controller.createNewBook);
router.post('/add-publisher', SchemaValidator(schemas.publisher, 'body'), controller.createNewPublisher);
router.post('/add-author', SchemaValidator(schemas.author, 'body'), controller.createNewAuthor);

router.put('/update-book', controller.updateBook);

router.delete('/delete-book', controller.deleteBook);

export default router;
