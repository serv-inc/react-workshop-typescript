import React from 'react';
import './App.css';
import BooksPage from './container/pages/BooksPage';
import BookDetailsPage from './container/pages/BookDetailsPage';
import BookEditPage from './container/pages/BookEditPage';
import HomePage from './container/pages/HomePage';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>{' | '}
        <Link to="/books">Books</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/books/:isbn/edit" component={BookEditPage} />
          <Route path="/books/:isbn" component={BookDetailsPage} />
          <Route path="/books" component={BooksPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
