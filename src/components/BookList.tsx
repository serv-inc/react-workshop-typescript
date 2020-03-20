import React from 'react';
import { IBook } from '../types';
import BookListItem from '../components/BookListItem';

interface BookListProps {
	books: IBook[]
}

const BookList: React.FC<BookListProps> = ({ books }) => (
	<>
		{ books.map((book: IBook, index: number) => (
			<li key={index}><BookListItem {...book} /></li>
		))}
	</>
);

export default BookList;
