# Installation instructions

1) Clone the repository from github (https://github.com/Ierofantis/book-store.git) using your client or git command line (git clone https://github.com/Ierofantis/book-store.git)
2) Open your terminal and type `git clone https://github.com/Ierofantis/book-store.git` 

# Important things to check before you continue

1) When the clone process ends navigate to book-store `cd book-store`
2) Now type `docker-compose up` to start the containers

# Creating tables in the database

5) For creating the tables in the database open another terminal and navigate to book-store and type `npx sequelize-cli db:migrate` ( after you have installed all the needed packages `npm install` )

6) For every table I have endpoints for adding mock data (`add-many-books`, `add-many-publishers`, `add-many-authors`)
