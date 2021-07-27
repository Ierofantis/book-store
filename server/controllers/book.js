import { Book } from '../models'
import { ErrorHandleWrapper } from "../middlewares/ErrorHandler";
import { fetchBookHelper } from "../helpers/fetchBookHelper";

/* Create new Book  */

export const createNewBook = ErrorHandleWrapper(async (req, res) => {

  let { title, description, visible, authorId, publisherId } = req.body;
  const isbn = new Date().valueOf();

  await Book.create({
    title,
    isbn,
    description,
    visible,
    authorId,
    publisherId
  })

  res.status(200).json({ success: true, msg: 'Book created' });

});

/* Update Book  */

export const updateBook = ErrorHandleWrapper(async (req, res) => {

  let { id, title, isbn, description, visible, authorId, publisherId } = req.body;

  await Book.update({
    title,
    isbn,
    description,
    visible,
    authorId,
    publisherId
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

  const helper = new fetchBookHelper({ bookId })

  let books = await helper.fetch();

  res.status(200).json(books);

});

/* Create many Books  */

const delay = (n) => {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
}

export const createBooks = ErrorHandleWrapper(async (req, res) => {
  let isbn = [];

  for (let i = 0; i <= 6; i++) {
    await delay(5);

    let isbnNumber = new Date().valueOf();
    isbn.push(isbnNumber)
  }

  await Book.bulkCreate([
    { title: 'Joe	', isbn: isbn[0], description: 'One', visible: true, authorId: 1, publisherId: 1 },
    { title: 'Node', isbn: isbn[1], description: 'Two', visible: false, authorId: 2, publisherId: 2 },
    { title: 'Ruby', isbn: isbn[2], description: 'Three', visible: false, authorId: 2, publisherId: 2 },
    { title: 'Ce', isbn: isbn[3], description: 'Four', visible: false, authorId: 3, publisherId: 3 },
    { title: 'Linus', isbn: isbn[4], description: 'Five', visible: true, authorId: 3, publisherId: 3 },
    { title: 'Aegean', isbn: isbn[5], description: 'Six', visible: true, authorId: 3, publisherId: 3 },
    { title: 'Viking', isbn: isbn[6], description: 'Seven', visible: true, authorId: 4, publisherId: 2 },
  ])

  res.status(200).json({ success: true, msg: 'Books created' });
});