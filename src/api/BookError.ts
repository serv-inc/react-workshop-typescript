export default class BookError {
	error: Error;
	constructor(error: Error) {
		this.error = error;
	}
}
