class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		return this.state = this.state * 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState
		};
	}

	get state() {
		return this._state;
	}
};

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}

	findBookBy(type, value) {
		let bookSearcher = this.books.find(book => book[type] === value);
		if (typeof bookSearcher === 'object') {
			return bookSearcher;
		} else {
			return null;
		}
	}

	giveBookByName(bookName) {
		let giveBook = this.books.find(book => book.name === bookName);
		if (typeof giveBook === 'object') {
			let index = this.books.indexOf(giveBook);
			this.books.splice(index, 1);
			return giveBook;
		} else {
			return null;
		}
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (this.marks?.[subject] === undefined && mark >= 2 && mark <= 5) {
			this.marks[subject] = [];
			this.marks[subject].push(mark);
		} else if (this.marks.hasOwnProperty(subject) && mark >= 2 && mark <= 5) {
			this.marks[subject].push(mark);
		}
	}

	getAverageBySubject(subject) {
		if (this.marks.hasOwnProperty(subject) === false) {
			return 0;
		} else {
			return this.marks[subject].reduce((a, b) => a + b) / this.marks[subject].length;
		}
	}

	getAverage() {
		let sum = 0;
		let n = 0;
		let subjs = Object.keys(this.marks);
		if (Object.keys(this.marks).length === 0) {
			return 0;
		}

		for (let i = 0; i < subjs.length; i++) {
			sum += this.marks[subjs[i]].reduce((a, b) => a + b);
			n += this.marks[subjs[i]].length;
		}
		return sum / n;
	}
}