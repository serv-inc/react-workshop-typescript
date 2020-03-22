import React from 'react';
import { IBook } from '../types';
import { Link } from 'react-router-dom';
import { bookDetailsPath } from '../api/books';

interface BookListItemProps extends IBook {
	onDelete(isbn: string): void;
}

const BookListItem: React.FC<BookListItemProps> = ({title, isbn, onDelete}) => {
	const handleClick = () => onDelete(isbn);
	return (
		<div>
			<Link to={bookDetailsPath(isbn)}>{title}</Link>
			<button onClick={handleClick}>[X]</button>
		</div>
	)
}

export default BookListItem;
