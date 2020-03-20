import React from 'react';
import BookError from '../api/BookError';

const ErrorMessage: React.FC<BookError> = ({ error }) => {

	return (
		<>
			<h3>Ein Fehler ist aufgetreten:</h3>
			<div>{error.message}</div>
		</>
	)
}

export default ErrorMessage;
