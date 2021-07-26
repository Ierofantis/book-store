import { author, publisher, Book } from '../models'
import { ErrorHandleWrapper } from "../middlewares/ErrorHandler";

/* Create new Publisher  */

export const createNewPublisher = ErrorHandleWrapper(async (req, res) => {

  let { title, isbn, description, visible } = req.body;

  await Book.create({
    title,
    isbn,
    description,
    visible
  })

  res.status(200).json({ success: true, msg: 'Book created' });

});