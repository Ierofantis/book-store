import { Author, Publisher, Book } from '../models'
import { ErrorHandleWrapper } from "../middlewares/ErrorHandler";

/* Create new Author  */

export const createNewAuthor = ErrorHandleWrapper(async (req, res) => {

  let { first_name, last_name, email, birth } = req.body;

  await Author.create({
    first_name,
    last_name,
    email,
    birth
  })

  res.status(200).json({ success: true, msg: 'Author created' });

});