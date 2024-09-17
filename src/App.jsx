import React from 'react';
import AppRouter from './router';
import './global.scss';

/**
 * The main App component, which renders the entire app.
 *
 * This component renders an AppRouter component, which is the main router for the app.
 * The AppRouter component renders the pages of the app, based on the current URL.
 *
 * @returns A JSX element representing the app.
 */
function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
