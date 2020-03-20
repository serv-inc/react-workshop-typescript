import React from 'react';
import { IBook } from '../types';
import { Link } from 'react-router-dom';
import { bookDetailsPath } from '../api/books';

const BookListItem: React.FC<IBook> = ({title, isbn}) => {

	return (
		<div><Link to={bookDetailsPath(isbn)}>{title}</Link></div>
	)
}

export default BookListItem;
