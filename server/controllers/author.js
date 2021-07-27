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

/* Create many Authors  */

export const createAuthors = ErrorHandleWrapper(async (req, res) => {
  await Author.bulkCreate([
    { first_name: 'Joe	', last_name: '3447', email: 'tl0m6oab89s@temporary-mail.net', birth: 1 },
    { first_name: 'Node', last_name: '3505', email: 'qz57hueryc@temporary-mail.net', birth: 3 },
    { first_name: 'Ruby', last_name: '4502', email: 'evtp0p4ld5b@temporary-mail.net', birth: 2 },
    { first_name: 'Ce', last_name: '3976', email: '818m6qggl4y@temporary-mail.net', birth: 3 },
    { first_name: 'Linus', last_name: '3954', email: 'b1wu5fo8f2d@temporary-mail.net', birth: 1 },
    { first_name: 'Aegean', last_name: '370', email: 'y058vl0but@temporary-mail.net', birth: 1 },
    { first_name: 'Viking', last_name: '2118', email: 'ydhib63k0pg@temporary-mail.net', birth: 2 },
  ])

  res.status(200).json({ success: true, msg: 'Authors created' });
});