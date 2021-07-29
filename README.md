# Book backend

# Installation instructions

1) Clone the repository from github (https://github.com/Ierofantis/book-store.git) using your client or git command line (git clone https://github.com/Ierofantis/book-store.git)
2) Open your terminal and type `git clone https://github.com/Ierofantis/book-store.git` 

# Important things to check before you continue

  a) Open the project with your code/text editor and rename the .env.example file to .env
  b) Check config/config.json file if It contains the correct host. For example in the docker toolbox for windows the published ip host is the internal ip of your machine like: 
  `http://192.xxx.xx.xxx:5432/` but in linux/mac is like: `http://127.0.0.1:5432/`. So change it according to your machines exported docker host

1) When the clone process ends navigate to book-store `cd book-store`
2) Now type `docker-compose up` to start the containers

# Creating tables in the database

5) For creating the tables in the database open another terminal and navigate to book-store and type `npx sequelize-cli db:migrate` ( after you have installed all the needed packages `npm install` )

6) For every table I have endpoints for adding mock data (`add-many-books`, `add-many-publishers`, `add-many-authors`)

# TODOS

1) Validations are simple and required. For addresses and telephones the validations can be more complicated, but it depends from func requirements. The same goes for the length of the chars.
2) Integrations tests (not necessary at the moment)

