import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../header/Header";
import BookCardCol from "../page/main/bookCardCol/BookCardCol";

function App() {
	return (
		<div className="App">
			<Header/>
			<br/>
			<hr/>
			<div className={'content'}>
				<BookCardCol/>
			</div>

		</div>
	);
}

export default App;
