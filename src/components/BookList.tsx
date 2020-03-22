import React from 'react';
import { IBook } from '../types';
import BookListItem from '../components/BookListItem';

interface BookListProps {
	books: IBook[],
	onDelete(isbn: string): void,
}

const BookList: React.FC<BookListProps> = ({ books, onDelete }) => (
	<>
		{ books.map((book: IBook, index: number) => (
			<li key={index}>
				<BookListItem {...book} onDelete={onDelete}  />
			</li>
		))}
	</>
);

export default BookList;
