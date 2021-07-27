import { Author, Publisher, Book } from '../models'
import { ErrorHandleWrapper } from "../middlewares/ErrorHandler";

/* Create new Book  */

export const createNewBook = ErrorHandleWrapper(async (req, res) => {

  let { title, description, visible } = req.body;
  const isbn = new Date().valueOf();

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

/* Get Book  */

export const getBooks = ErrorHandleWrapper(async (req, res) => {

  const { bookId } = req.query;
  let books;

  if (bookId) {
    books = await Book.findOne({ raw: true, where: { id: bookId } });
  } else {
    books = await Book.findAll({
      raw: true,
      order: [["created_at", "DESC"]],
    });
  }
  console.log(books)
  res.status(200).json({ books });

});