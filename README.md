## LANG-ME

## project overview :   https://is-ammar.github.io/lang-me

A modern React application that integrates various APIs to provide a rich user experience. This project includes a responsive design, a navbar, hero section, courses section, and multiple API integrations like a dictionary, quote generator, and book search. It also features an about section and a contact form.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Navbar**: A responsive navigation bar.
- **Hero Section**: A visually appealing hero section to capture user attention.
- **Courses Section**: Displays a list of courses.
- **API Integrations**:
  - **DictionaryComponent**: Fetches and displays word definitions.
  - **QuoteComponent**: Generates and displays random quotes.
  - **BookSearchComponent**: Allows users to search for books.
- **About Section**: Information about the project or team.
- **Contact Section**: A form for users to get in touch.
- **Responsive Design**: Fully responsive layout using styled-components.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone git@github.com:Is-Ammar/lang-me.git
   
   ```

1.  **Navigate to the project directory**:
```
    cd lang-me(or whatever)

```

2.  **Install dependencies**:

```
    npm install

```
3.  **Start the development server**:

```
    npm start

```

4.  **Open your browser** and visit `http://localhost:3000`.

Usage
-----

After starting the development server, you can interact with the application:

-   **Navbar**: Navigate through different sections of the app.

-   **Hero Section**: View the main highlight of the application.

-   **Courses Section**: Browse through the list of available courses.

-   **API Integrations**:

    -   **DictionaryComponent**: Enter a word to get its definition.

    -   **QuoteComponent**: Click to generate a new random quote.

    -   **BookSearchComponent**: Search for books by title or author.

-   **About Section**: Learn more about me.

-   **Contact Section**: Fill out the form to send a message.

Components
----------

The project is structured with the following main components:

-   **Navbar**: Handles navigation.

-   **Hero**: Displays the hero section.

-   **Courses**: Lists available courses.

-   **DictionaryComponent**: Fetches and displays word definitions.

-   **QuoteComponent**: Generates and displays random quotes.

-   **BookSearchComponent**: Allows users to search for books.

-   **Contact**: Contains a contact form.

-   **About**: Provides information about the project or team.

API Integration
---------------

This project integrates with the following APIs:

-   **Dictionary API**: Fetches word definitions.

-   **Quote API**: Generates random quotes.

-   **Book Search API**: Allows searching for books.

To use these APIs, ensure you have the necessary API keys and update the `.env` file with your keys:
```

REACT_APP_DICTIONARY_API_KEY=your_dictionary_api_key
REACT_APP_QUOTE_API_KEY=your_quote_api_key
REACT_APP_BOOK_SEARCH_API_KEY=your_book_search_api_key
```
Styling
-------

The project uses `styled-components` for styling, providing a flexible and maintainable way to handle CSS in React. The `theme` object is used to manage spacing, colors, and breakpoints and smooth scrolling consistently across the application.

Contributing
------------

Contributions are welcome! Please follow these steps:

1.  Fork the repository.

2.  Create a new branch (`git checkout -b feature/YourFeatureName`).

3.  Commit your changes (`git commit -m 'Add some feature'`).

4.  Push to the branch (`git push origin feature/YourFeatureName`).

5.  Open a pull request.

Acknowledgements
----------------

-   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.

-   [Styled Components](https://styled-components.com/) - For styling React components.

-   [Dictionary API](https://dictionaryapi.dev/) - For word definitions.

-   [Quote API](https://api.quotable.io/) - For random quotes.

-   [Book Search API](https://www.googleapis.com/books/v1/volumes) - For searching books
