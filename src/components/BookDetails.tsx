import React from 'react';
import { IBook } from '../types';

const BookDetails: React.FC<IBook> = ({ isbn, title, subtitle, abstract, author }) => (
	<>
		<h3>{title}</h3>
		<h4>{subtitle}</h4>
		<div>{abstract}</div>
		<div>{author}</div>
		<div>{isbn}</div>
	</>
)

export default BookDetails;
