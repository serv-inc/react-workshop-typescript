import React, { useState, useEffect } from 'react';
import { History } from 'history';
import { match } from 'react-router-dom';
import { IBook, emptyBook } from '../../types';
import { getBook, updateBook, bookDetailsPath } from '../../api/books';
import BookForm from '../../components/BookForm';

interface BookEditPageProps {
	match: match<{ isbn: string}>,
	history: History,
}

const BookEditPage: React.FC<BookEditPageProps> = ({ history, match: { params: { isbn }}}) => {

	const [book, setBook] = useState<IBook>(emptyBook);

	useEffect(() => {
		getBook(isbn)
			.then((result: IBook) => setBook(result))
	}, [isbn])

	const handleChange = (attributeName: string, value: string) => {
		const newBook: IBook = { ...book, [attributeName]: value };
		setBook(newBook);
	}

	const handleSubmit = () => {
		updateBook(book)
			.then((result: IBook) => history.push(bookDetailsPath(result.isbn)));
	}

	return (
		<>
			<h1>Edit Book</h1>
			<BookForm {...book} onChange={handleChange} onSubmit={handleSubmit} />
		</>
	);
}

export default BookEditPage;
