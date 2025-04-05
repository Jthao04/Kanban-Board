# Kanban-Board

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

# [Live Page]()

## Screenshot
![Fullscreen Image](/Assets/Screenshot.png)

## Description

A kanban application where the user is able to login with their username and password and once directed to the home/main page, the user is able to create a ticket by adding the name of the ticket, the status, and the user's ID. Once the tickets are created they will be placed in their respective columns which are "Todo", "In Progess", and "Done". Tickets can be edited and moved into the 3 columnns. Tickets can also be deleted as well.

## Installation

Clone the repository and make sure all keys/passwords are set up in the .env file in the server side (backend). Use PostgreSQL to create the database stock_db if not already created, then while in PostgreSQL type "\i schema.sql". Quit PostgresSQL, then open the terminal in the backend preferably in the package.json and "type npm i". After type "npm run dev" to start up port in the backend and it should tell that the server is listening to the specific port it is on and that the database is connected. Next open up another terminal in the frontend prefereably in the package.json and type "npm run dev" as well and a port should open and the application will work. Login into the page and the kanban board should be working and tickets should be able to be moved around, edited, or added to the page.

## Usage

Use this application to login into the kanban board and create and move tickets around as you put them into a todo, in progress, and done column.

## Contribution

I was able to create a fullstack react application through the utilization of Node.js, Express, PostgreSQL, and Sequelize.

## Tests

Run "npm run dev" in the server side (backend) to have the port listen and conect to the database. Then run "npm run dev" in the client side (frontend) to have it's own port open and a web page will run. Since the port in the backend is listening, the frontend will be able to open a kanban board that is interactive after logging in.

## Questions
Here is a link to my [GitHub](https://github.com/Jthao04).

If you have any questions, you can reach me at [Jthao04@gmail.com](mailto:Jthao04@gmail.com).
