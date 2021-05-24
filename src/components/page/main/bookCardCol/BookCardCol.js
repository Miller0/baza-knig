import React, {useState} from "react";
import './BookCardCol.scss';

import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup'
import BookCard from "../bookCard/BookCard";

//import books from '../testData/books.json';


export const BookCardCol = () => {
	// const getBooks = books => {
	// 	let content = [];
	// 	for (let item of books) {
	// 		content.push(<li key={item.id}>{item.animal}</li>);
	// 	}
	// 	return content;
	// };

	return (
		<>
			<CardColumns>
				<CardGroup>
					<BookCard/>
				</CardGroup>
			</CardColumns>
			<CardColumns>
				<CardGroup>
					<BookCard/>
				</CardGroup>
			</CardColumns>
		</>
	);
};
export default BookCardCol;