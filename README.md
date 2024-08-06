# ReactProject
# Product Listing App

A React Native application for listing products with detailed views, implemented with Redux for state management, React Navigation for routing, and styled using custom styles and vector icons.

## Features

- **Product Listing**: Display a list of products with images, titles, prices, and ratings.
- **Product Detail**: Show detailed information about each product.
- **Navigation**: Implement navigation between the product list and detail screens using React Navigation.
- **State Management**: Manage the application state using Redux and Redux Thunk for asynchronous actions.
- **Styling**: Custom styles with rounded rectangles, shadows, and vector icons for a polished UI.
- **Testing**: Unit tests for components and Redux reducers using Jest and React Native Testing Library.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/product-listing-app.git
    cd product-listing-app
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Link the vector icons (for React Native CLI projects):

    ```sh
    npx react-native link react-native-vector-icons
    ```

## Usage

1. Run the app on your emulator or device:

    ```sh
    npx react-native run-android # for Android
    npx react-native run-ios # for iOS
    ```

2. Start the Metro Bundler:

    ```sh
    npm start
    ```

## Running Tests

1. To run the unit tests, use the following command:

    ```sh
    npm test
    ```

## Project Structure

- `src/components`: Contains the React components for the product list and detail views.
- `src/store`: Contains Redux-related files including reducers, actions, and thunks.
- `src/styles`: Contains the style files for the components.
- `__tests__`: Contains the test files for components and Redux reducers.

## Technologies Used

- **React Native**: For building the mobile application.
- **Redux**: For state management.
- **Redux Thunk**: For handling asynchronous actions.
- **React Navigation**: For navigation between screens.
- **React Native Vector Icons**: For icons.
- **Jest**: For testing.
- **React Native Testing Library**: For testing React Native components.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Contact

For any inquiries or issues, please contact [your-email@example.com](mailto:your-email@example.com).

---

Happy Coding!
