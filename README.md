## User Profile App
This is a simple User Profile app built with React and Vite. The app fetches user data from a mock API provided by Reqres and displays it in a clean, responsive UI.

## Features
- Displays a list of user profiles with avatars, names, and emails.
- Uses an error boundary for better error handling.
- Includes a loading indicator while fetching data.

## Project Overview: User Profile App
The User Profile App is a simple React application designed to display a list of user profiles, including their avatars, names, and emails. It fetches this information from a mock API (Reqres), which provides sample data for testing purposes.

## Key Features
- User Profiles Display:

The app fetches data from the API and displays it in a grid layout, with each profile showing a user's avatar, name, and email.
- Error Handling:
The app includes an error boundary component (ErrorBoundary.jsx) that catches unexpected errors and displays a fallback message instead of breaking the app.

- Loading Indicator:
While data is being fetched, a loading message is shown to indicate that the data is still being loaded.

- Modular and Scalable Components:
The code is organized into modular components, making it easy to understand and scale. UserCard is a reusable component that displays individual user details, while App handles fetching data and managing the app's main state.

## Technologies Used
- React: The core JavaScript library for building the UI.
- Vite: A fast, modern frontend build tool for development and bundling.
- CSS: Used for styling the components, ensuring a clean and responsive layout.

## Project Structure
The app is structured to be modular, with reusable components and a clean separation of concerns. It’s easy to extend or modify the app by adding more features, such as pagination or additional user details.

This project is an excellent starter example for understanding data fetching, error handling, and component structuring in a React application.
