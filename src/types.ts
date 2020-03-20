export interface IBook {
	isbn: string,
	title: string,
	subtitle: string,
	abstract: string,
	author: string,
	publisher: {
		name: string,
		url: string,
	}
}

export const emptyBook = {
	isbn: '',
	title: '',
	subtitle: '',
	abstract: '',
	author: '',
	publisher: {
		name: '',
		url: '',
	}
}
