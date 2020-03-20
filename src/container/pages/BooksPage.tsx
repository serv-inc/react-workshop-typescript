import React, { useState, useEffect } from 'react';
import { IBook } from '../../types';
import BookList from '../../components/BookList';
import { getBooks } from '../../api/books';
import BookError from '../../api/BookError';
import ErrorMessage from '../../components/ErrorMessage';

const BooksPage: React.FC = () => {
	const [books, setBooks] = useState<IBook[]>();
	const [error, setError] = useState<BookError>();

	useEffect(() => {
		getBooks()
			.then((result: IBook[]) => setBooks(result))
			.catch((error: BookError) => setError(error));
	}, []);

	return (
		<>
			<h1>Books</h1>
			{!books && !error ? <div>Loading Data...</div> : null }
			{ books ? <BookList books={books} /> : null }
			{ error ? <ErrorMessage {...error} /> : null }
		</>
	);
}

export default BooksPage;
