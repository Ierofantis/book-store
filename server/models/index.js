import Book from './book';
import Author from './author';
import Publisher from './publisher';

//authors
Book.belongsTo(Author, {
  foreignKey: "authorId",
  // as: "author"
});

//publishers
Book.belongsTo(Publisher, {
  foreignKey: "publisherId",
  // as: "publisher"
});

export {
  Book,
  Author,
  Publisher
}