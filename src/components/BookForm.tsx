import React, { ChangeEvent, FormEvent } from 'react';
import { IBook } from '../types';

interface BookFromProps extends IBook {
	onChange(attributeName: string, value: string): void;
	onSubmit(): void;
}

const BookForm: React.FC<BookFromProps> = ({
	title, abstract, onChange, onSubmit
}) => {

	function handleOnChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		onChange(event.target.name, event.target.value);
	}

	function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		onSubmit();
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<div>
				<label>Title:
					<input type="text" name="title" value={title} onChange={handleOnChange} />
				</label>
			</div>
			<div>
				<label>Abstract:
					<textarea rows={10} cols={50} name="abstract" value={abstract} onChange={handleOnChange} />
				</label>
			</div>
			<button type="submit">Save</button>
		</form>
	);
}

export default BookForm;
