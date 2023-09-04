import React from 'react'; // Import the React library
import ReactDOM from 'react-dom/client'; // Import the ReactDOM library
import App from './App'; // Import the App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element in the document
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component into the root element */}
  </React.StrictMode>
);