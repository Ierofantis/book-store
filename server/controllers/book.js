import { Author, Publisher, Book } from '../models'
import { ErrorHandleWrapper } from "../middlewares/ErrorHandler";

/* Create new Book  */

export const createNewBook = ErrorHandleWrapper(async (req, res) => {

  let { title, isbn, description, visible } = req.body;

  await Book.create({
    title,
    isbn,
    description,
    visible
  })

  res.status(200).json({ success: true, msg: 'Book created' });

});

/* Update Book  */

export const updateBook = ErrorHandleWrapper(async (req, res) => {

  let { id, title, isbn, description, visible } = req.body;

  await Book.update({
    title,
    isbn,
    description,
    visible
  },
    { where: { id } }
  );
  res.status(200).json({ success: true, msg: 'Book updated' });

});

/* Delete Book  */

export const deleteBook = ErrorHandleWrapper(async (req, res) => {

  let { id } = req.body;

  await Book.destroy({ where: { id } })

  res.status(200).json({ success: true, msg: 'Book deleted' });

});