


# Product Listing App

A React Native application for listing products with detailed views, implemented with Redux for state management, React Navigation for routing, and styled using custom styles and vector icons.

## Features

- **Product Listing**: Display a list of products with images, titles, prices, and ratings.
- **Product Detail**: Show detailed information about each product.
- **Navigation**: Implement navigation between the product list and detail screens using React Navigation.
- **State Management**: Manage the application state using Redux and Redux Thunk for asynchronous actions.
- **In-App Messaging**: Integrate Firebase In-App Messaging to engage users and provide them with contextual messages while they use the app.

## API

- **Product Listing (GET)**
  - [https://fakestoreapi.com/products](https://fakestoreapi.com/products)

- **Product Details (GET)**
  - [https://fakestoreapi.com/products/1](https://fakestoreapi.com/products/1)

## Main Libraries Used

- **React Native**: For building the mobile application.
- **Redux**: For state management.
- **Redux Thunk**: For handling asynchronous actions.
- **React Navigation**: For navigation between screens.
- **React Native Vector Icons**: For icons.
- **Firebase**: For in-app messaging to engage users.

## Firebase Integration

### Setting Up Firebase

1. **Add Firebase to Your Project**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Create a new project or select an existing one.
   - Add your app to the project (iOS and/or Android).
   - Follow the instructions to download the `google-services.json` (for Android) and `GoogleService-Info.plist` (for iOS) and place them in your project.

2. **Install Firebase Dependencies**:
   ```bash
   npm install @react-native-firebase/app @react-native-firebase/in-app-messaging
   ```

3. **Configure Firebase in Your Project**:
   - For Android: Add the `google-services.json` file to the `android/app` directory and modify the `android/build.gradle` and `android/app/build.gradle` files as instructed by Firebase.
   - For iOS: Add the `GoogleService-Info.plist` file to the iOS project and add the Firebase dependencies in the `ios/Podfile`.

4. **Enable In-App Messaging**:
   - In the Firebase Console, go to the In-App Messaging section.
   - Create and configure your messages.

### Using In-App Messaging

- **Initialize Firebase in Your App**:
  ```javascript
  import messaging from '@react-native-firebase/in-app-messaging';

  const App = () => {
    useEffect(() => {
      messaging().setMessagesDisplaySuppressed(false);
    }, []);

    // Rest of your app code
  };
  ```

- **Display Messages**: Firebase In-App Messaging will automatically display the messages based on the conditions you set in the Firebase Console.

## Demo

[![Product Listing App Demo](https://drive.google.com/uc?export=view&id=1b0RSjKTCHiJQV6XOE8OXQKVDZI2Fvk21)](https://drive.google.com/file/d/1b0RSjKTCHiJQV6XOE8OXQKVDZI2Fvk21/view?usp=drive_link)

Click the image above to watch the demo video.
```

