const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];


//Array of authors and the book they wrote
//"--- wrote --- in ---"

/* Notes:
- parameter (inside the purple ()) = the input of the function
- {} are the instructions; the forEach function will run everything inside the brace 
- assign map to a new const; ex: i assigned map to the const newArr */

const newArr = books.map((description) => {
  return (description.authorFirst + " " + description.authorLast + " wrote " + description.name + " in " + description.publishDate)

});
console.log(newArr);


//Sort books from oldest to most recent

const orderedBooks = books.sort(function (book1, book2) {
  return book1.publishDate - book2.publishDate;
});
console.log(orderedBooks);


//sort books alphabetically

const alphabetically = titles;
alphabetically.sort();
console.log(alphabetically);


//Find who wrote War and Peace

/* Notes:
one equal sign for assignment; two equal signs for checking */
const warAndPeace = books.find((book) => book.name === "War and Peace");
console.log(warAndPeace.authorFirst + " " + warAndPeace.authorLast);


//how many books were written before 1900?

const before1900 = books.filter((book) => book.publishDate < 1900);
console.log(before1900)


//was there at least one book published within the last 100 years?

const currentYear = new Date().getFullYear();
const atLeastOne = books.some((book) => currentYear - book.publishDate <= 100);
console.log(atLeastOne);

//was every book published within the last 100 years?

const everyBook = books.filter((book) => book.publishDate = 100);
console.log(everyBook);

//print a list of books that "includes" the genre historical

const historical = books.filter((book) => book.genre.includes("historical"));
console.log(historical)
