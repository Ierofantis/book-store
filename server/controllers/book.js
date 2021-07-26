// import { author, publisher, book } from '../models'
import { ErrorHandleWrapper } from "../middlewares/ErrorHandler";
const db = require("../models");
const Book = db.Book;

/* Create new Book  */

export const createNewBook = ErrorHandleWrapper(async (req, res) => {

  let { title, isbn, description, visible } = req.body;

  await Book.create({
    title,
    isbn,
    description,
    visible
  })

  res.status(200).send({ success: true, msg: 'Book created' });

});