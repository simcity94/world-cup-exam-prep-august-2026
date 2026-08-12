# world-cup-exam-prep-august-2026
JS Back-End exam preperation project

## Set-up

    [x] Initialize project with `npm init -y`
    [x] Install dependencies - express, express-handlebars
    [x] Set up server
    [x] Add resources to project
    [x] Set up handlebars 

## Initialize home page
    [x] Add main layout
    [x] Render home page and remove statics
    [x] Implement controllers and routes

## Register
    [x] Add auth controller
    [x] Render register page
    [x] Add body parsing middleware and extract register form data
    [x] Install zod and create register schema
    [x] Add error utility and implement in auth controller
    [x] If validation fails keep email in the form
    [x] Add async password hashing using bcrypt
    [x] Install prisma ORM (change node to tsx)
    [x] Save registered user in the database
    [x] Redirect to home page after successful registration
    [x] Add authentication via jsonwebtoken and login user automatically after registration

## Login
    [x] Render login page
    [x] Execute login logic and validate user credentials
    [x] Add error handling and keep email in the form
    [x] Redirect to home page after successful login

## Logout
    [x] Implement logout functionality

## Route Guards
    [x] Create middleware for route guards
    [x] Add middleware to index.js
    [x] Implement route guards for register, login and logout routes
    [] Implement route guards for dynamic routes
    [] Implement route guards for Add Match, Edit Match and Delete Match routes

## Add Match
    [x] Render Add Match page
    [x] Redirect to Dashboard after successful match creation
    [x] Keep data from Add Match form on the page if unsuccesfull
    [x] Implement Add Match logic and save match in the database


