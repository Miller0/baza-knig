import React from 'react'
import './BookCardCol.scss';

import CardColumns from 'react-bootstrap/Card';
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
            <CardGroup>
                <CardColumns style={{minWidth: '20rem'}}>
                    <BookCard/>
                </CardColumns>
                <CardColumns style={{minWidth: '20rem'}}>
                    <BookCard/>
                </CardColumns>
                <CardColumns style={{minWidth: '20rem'}}>
                    <BookCard/>
                </CardColumns>
            </CardGroup>
        </>
    );
};
export default BookCardCol;