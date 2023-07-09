# Dynamic Products Page

## Overview

This repository contains a solution for the Dynamic Product Page challenge. The goal of the challenge is to create a dynamic product page that lists various products and allows users to vote for their favorite products.

<div style="display: flex; align-items: center;">
  <img width="600" alt="" src="./public/images/readme/web-size.png">
  <img width="150" alt="" src="./public/images/readme/phone-size.png">
</div>



## Setup

``` shell
$ cd jun.ukemori
$ npm install

```

## Usage
To build the project and start the development server:

``` shell
$ npm run build
$ npm start
```
The application will be accessible at http://localhost:3000.


## Design Decisions
# User Interface

The user interface was designed to closely resemble the provided example. The product page layout consists of a list of products displayed in a vertical arrangement. Each product entry includes a title, description, votes count, submitter avatar, and product image.

The title of each product is a clickable link that redirects to the specified URL. Clicking the vote button increments the vote count for the corresponding product. If the voted product surpasses the product above it in terms of votes, it moves up in the product list to maintain the order.

## Technology Choices
- React: I chose React as the UI framework because of its component-based architecture and ease of use. React provides a straightforward way to manage the state of the application and efficiently render the UI based on data changes.

- CSS: For styling, I used CSS without any specific CSS library. Although the requirement doesn't focus on the visual appearance of the page, I ensured that the layout and styling were visually clear and organized.

- Webpack: Webpack is used as the bundler for the project. It is responsible for bundling JavaScript and other assets, such as images, into a format that can be used by the browser.

## Folder Structure
The project follows a typical React folder structure:
``` shell
- src/
  - components/  # folder contains corresponding css and test files
    - cards
  - data/
    - seed.js  # Contains utility functions provided to generate vote counts and return a list of products to render.
  - App.js  # The main component that represents the product page.
  - main.js  # The entry point of the application.
- index.html
- package.json

```

## Testing

Unit testing is an essential part of the development process. Although this exercise doesn't require 100% code coverage, I have included a basic set of unit tests to demonstrate my ability to write tests.

To run the tests, use the following command:

``` shell
npm run test
```

## Time Spent

I spent approximately 6 hours completing this exercise.
