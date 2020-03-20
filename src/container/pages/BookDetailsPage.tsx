import React, { useState, useEffect } from 'react';
import { match, Link } from 'react-router-dom';
import { IBook } from '../../types';
import { getBook, bookEditPath } from '../../api/books';
import BookDetails from '../../components/BookDetails';

interface BookDetailsPageProps {
	match: match<{ isbn: string}>
}

const BookDetailsPage: React.FC<BookDetailsPageProps> = ({ match: { params: { isbn }}}) => {

	const [book, setBook] = useState<IBook>();

	useEffect(() => {
		getBook(isbn)
			.then((result: IBook) => setBook(result))
	}, [isbn]);

	return (
		<>
			<h1>Book Details</h1>
			{
				book ? (
					<>
						<BookDetails {...book} />
						<Link to={bookEditPath(book.isbn)}>Edit</Link>
					</>
				) : <div>Loading Data...</div>
			}
		</>
	);
}

export default BookDetailsPage;
