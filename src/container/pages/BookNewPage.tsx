import React, { useState, useEffect } from 'react';
import { History } from 'history';
import { IBook, emptyBook } from '../../types';
import { createBook, bookDetailsPath } from '../../api/books';
import BookForm from '../../components/BookForm';

interface BookNewPageProps {
	history: History
}

const BookNewPage: React.FC<BookNewPageProps> = ({ history }) => {

	const [book, setBook] = useState<IBook>(emptyBook);

	const handleChange = (attributeName: string, value: string) => {
		const newBook: IBook = { ...book, [attributeName]: value };
		setBook(newBook);
	}

	const handleSubmit = () => {
		createBook(book)
			.then((result: IBook) => history.push(bookDetailsPath(result.isbn)));
	}

	return (
		<>
			<h1>Create new Book</h1>
			<BookForm {...book} onChange={handleChange} onSubmit={handleSubmit} />
		</>
	);
}

export default BookNewPage;
