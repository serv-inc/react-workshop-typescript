import * as constants from './constants';
import { IBook } from '../types';
import BookError from './BookError';

// Browser pahts
export function bookDetailsPath(isbn: string): string {
	return `/${constants.BOOKS_PATH}/${isbn}`;
}

export function bookEditPath(isbn: string): string {
	return `/${constants.BOOKS_PATH}/${isbn}/edit`;
}

export function newBookPath(): string {
	return `/${constants.BOOKS_PATH}/new`;
}

// Server urls
export function getBooksUrl(): string {
	return `${constants.BASE_API_URL}/${constants.BOOKS_PATH}`;
}

export function getBookUrl(isbn: string): string {
	return `${constants.BASE_API_URL}/${constants.BOOKS_PATH}/${isbn}`;
}

export function updateBookUrl(isbn: string): string {
	return `${constants.BASE_API_URL}/${constants.BOOKS_PATH}/${isbn}`;
}

export function deleteBookUrl(isbn: string): string {
	return `${constants.BASE_API_URL}/${constants.BOOKS_PATH}/${isbn}`;
}

export function createBookUrl(): string {
	return `${constants.BASE_API_URL}/${constants.BOOKS_PATH}`;
}

// CRUD Actions
// createBook(book) POST /books
// getBooks         GET /books
// getBook(isbn)    GET /books/:isbn
// updateBook(book) PUT /books/:isbn
// deleteBook(isbn) DELETE /books/:isbn

export function getBooks(): Promise<IBook[]> {
	return fetch(getBooksUrl())
		.then((response: Response): Promise<IBook[]> => response.json() )
		.catch((error: Error) => {
			return new Promise((_, reject) => {
				reject(new BookError(error));
			});
		});
}

export function getBook(isbn: string) {
	return fetch(getBookUrl(isbn))
		.then(response => response.json())
		.catch((error: Error) => {
			return new Promise((_, reject) => {
				reject(new BookError(error));
			});
		});
}

export function updateBook(book: IBook) {
	const request = new Request(updateBookUrl(book.isbn), {
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
		method: 'PUT',
		body: JSON.stringify(book),
	});

	return fetch(request)
		.then(response => response.json())
		.catch((error: Error) => {
			return new Promise((_, reject) => {
				reject(new BookError(error));
			});
		});
}

export function createBook(book: IBook) {
	const request = new Request(createBookUrl(), {
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(book),
	});

	return fetch(request)
		.then(response => response.json())
		.catch((error: Error) => {
			return new Promise((_, reject) => {
				reject(new BookError(error));
			});
		});
}

export function deleteBook(isbn: string) {
	const request = new Request(deleteBookUrl(isbn), {
		headers: {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
		},
		method: 'DELETE',
	});

	return fetch(request)
		.then(response => response.json())
		.catch((error: Error) => {
			return new Promise((_, reject) => {
				reject(new BookError(error));
			});
		});
}
