import { Router } from 'express';

import * as controller from '../controllers';
import { schemas } from "../middlewares/schemas";
import { SchemaValidator } from "../middlewares/SchemaValidator";

const router = Router();

/* GET */

router.get('/get-books', controller.getBooks);

/* POST */

router.post('/add-book', SchemaValidator(schemas.book, 'body'), controller.createNewBook);
router.post('/add-publisher', SchemaValidator(schemas.publisher, 'body'), controller.createNewPublisher);
router.post('/add-author', SchemaValidator(schemas.author, 'body'), controller.createNewAuthor);

/* PUT */

router.put('/update-book', SchemaValidator(schemas.book, 'body'), controller.updateBook);

/* DELETE */

router.delete('/delete-book', controller.deleteBook);

export default router;
