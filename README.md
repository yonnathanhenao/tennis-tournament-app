# Tennis Tournament Application

Welcome to the Tennis Tournament Application! This application is designed to manage tennis tournaments, providing features for both administrators and regular users.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Technologies Used](#technologies-used)
5. [Development](#development)
6. [How to Use](#how-to-use)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

The Tennis Tournament Application allows users to organize and participate in tennis tournaments. The application distinguishes between two types of users: administrators and regular users.

- **Administrators**: Can manage tournaments and users through the admin panel.
- **Regular Users**: Can view a list of tournaments and register for participation.

## Features

### Administrator Features

- Create, edit, and delete tournaments.
- Manage user accounts.

### Regular User Features

- View a list of available tournaments.
- Register for tournaments.

## Project Structure

The project follows a modular structure for better organization and maintainability. Here's an overview of the main directories:

- **src**
  - **app**
    - **admin**: Contains group of pages related to the admin panel.
    - **auth**: Manages authentication features.
    - **user**: Handles user-related features.
  - **config**: Configuration files, including API settings, etc
  - **features**
    - **auth**: Authentication module.
      - **actions**: Server actions.
      - **constants**: Constants used in the module.
      - **core**: Core functionality.
        - **dto**
        - **models**
        - **services**
      - **ui**: User interface components.
    - **tournament**: Module for tournament-related features.
    - **user**: Module for user-related features.
  - **hooks**: Custom hooks used across the application.
  - **ui-shared**: Shared UI components and styles.
    - **components**: Reusable UI components (e.g., buttons, cards).
    - **styles**: Global styles used throughout the application.
  - **utils**: Utility functions and helper modules.

## Technologies Used

The Tennis Tournament Application is built using React.js and Next.js. These technologies were chosen for their efficiency in developing dynamic and responsive web applications.

## Development

The project is currently in development. To contribute or set up the development environment, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.

## How to Use

To use the Tennis Tournament Application, follow these steps:

1. Access the application through the provided URL.
2. If you are an administrator, log in to the admin panel.
3. Manage tournaments and user accounts accordingly.
4. If you are a regular user, browse the list of tournaments and register for the desired one.

## Contributing

Contributions to the Tennis Tournament Application are welcome!

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it according to the terms specified in the license.

Happy coding! 🎾🏆
