import { Author, Publisher, Book } from '../models'
import moment from 'moment';

export class fetchBookHelper {

    constructor({ bookId }) {
        this.id = bookId;
        this.books = null;
    }

    async fetch() {
        if (this.id) {
            const bookExists = await Book.count({ where: { id: this.id } });

            if (bookExists > 0) {
                let getBook = await Book.findOne({
                    raw: true,
                    where: { id: this.id },
                    include: [{
                        model: Author,
                        attributes: ["first_name", "last_name", "email", "birth"],
                        required: false,
                    }, {
                        model: Publisher,
                        attributes: ["name", "address"],
                        required: false,
                    }],
                    attributes: ["title", "description", "isbn", "created_at"],
                });

                this.books = {
                    title: getBook.title,
                    description: this.truncate(getBook.description),
                    isbn: getBook.isbn,
                    creation_date: moment(getBook.created_at).format('MM/DD/YYYY'),
                    author_full_name: getBook['Author.first_name'] + "" + getBook['Author.last_name'],
                    author_email: getBook['Author.email'],
                    author_birth: moment(getBook['Author.birth']).format('Do MMM YYYY'),
                    publisher_name: getBook['Publisher.name'],
                    publisher_email: getBook['Publisher.address']
                }
            } else {
                this.books = "This id is not exist";
            }
        } else {
            let getBooks = await Book.findAll({
                raw: true,
                include: [{
                    model: Author,
                    attributes: ["first_name", "last_name"],
                    order: [
                        [Author, 'last_name', 'ASC'],
                    ],
                    required: false,
                }],
                attributes: ["title", "description", "isbn"],
                order: [
                    ['created_at', 'DESC']
                ],
            });

            let listOfBooks = await getBooks;

            this.books = await listOfBooks.map(b => ({ "title": b.title, "description": this.truncate(b.description), "isbn": b.isbn, "author_full_name": b['Author.first_name'] + " " + b['Author.last_name'] }))
        }

        return this.books
    }

    truncate(input) {
        if (input.length > 100) {
            return input.substring(0, 100) + '...';
        }
        return input;
    };
}