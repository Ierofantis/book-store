import { author, publisher, Book } from '../models'
import { ErrorHandleWrapper } from "../middlewares/ErrorHandler";

/* Create new Author  */

export const createNewAuthor = ErrorHandleWrapper(async (req, res) => {

  let { title, isbn, description, visible } = req.body;

  await Book.create({
    title,
    isbn,
    description,
    visible
  })

  res.status(200).json({ success: true, msg: 'Book created' });

});