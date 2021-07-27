import { Publisher } from '../models'
import { ErrorHandleWrapper } from "../middlewares/ErrorHandler";

/* Create new Publisher  */

export const createNewPublisher = ErrorHandleWrapper(async (req, res) => {

  let { name, telephone, address } = req.body;

  await Publisher.create({
    name,
    telephone,
    address
  })

  res.status(200).json({ success: true, msg: 'Publisher created' });

});

/* Create many Publishers  */

export const createPublishers = ErrorHandleWrapper(async (req, res) => {
  await Publisher.bulkCreate([
    { name: 'Joe', telephone: '3447', address: 'tl0m6oab89s' },
    { name: 'Node', telephone: '3505', address: 'qz57hueryc' },
    { name: 'Ruby', telephone: '4502', address: 'evtp0p4ld5b' },
  ])

  res.status(200).json({ success: true, msg: 'Publishers created' });
});