import React, { useState, useEffect } from 'react';
import { IBook } from '../../types';
import BookList from '../../components/BookList';
import { getBooks, newBookPath, deleteBook } from '../../api/books';
import BookError from '../../api/BookError';
import ErrorMessage from '../../components/ErrorMessage';
import { Link } from 'react-router-dom';

const BooksPage: React.FC = () => {
	const [books, setBooks] = useState<IBook[]>();
	const [error, setError] = useState<BookError>();

	useEffect(() => {
		getBooks()
			.then((result: IBook[]) => setBooks(result))
			.catch((error: BookError) => setError(error));
	}, []);

	const handleDelete = (isbn: string) => {
		deleteBook(isbn)
			.then(() => getBooks()
				.then((result: IBook[]) => setBooks(result))
				.catch((error: BookError) => setError(error)));
	}

	return (
		<>
			<h1>Books</h1>
			{!books && !error ? <div>Loading Data...</div> : null }
			{ books ? (
				<>
					<BookList books={books} onDelete={handleDelete} />
					<Link to={newBookPath()}>New Book</Link>
				</>
			 ) : null }
			{ error ? <ErrorMessage {...error} /> : null }
		</>
	);
}

export default BooksPage;
