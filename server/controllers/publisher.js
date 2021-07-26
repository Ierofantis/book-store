import { Author, Publisher, Book } from '../models'
import { ErrorHandleWrapper } from "../middlewares/ErrorHandler";

/* Create new Publisher  */

export const createNewPublisher = ErrorHandleWrapper(async (req, res) => {

  let { username, email, password } = req.body;

  await Publisher.create({
    username,
    email,
    password
  })

  res.status(200).json({ success: true, msg: 'Publisher created' });

});