import React, {useState} from "react";
import './BookCard.scss';

import Card from 'react-bootstrap/Card';
import Attribute from "./components/Attribute";
import ShortBottom from "./components/ShortBottom";

export const BookCard = () => {
	let img = "https://baza-knig.xyz/uploads/posts/2021-05/1621831922_1610090961_008.jpg";
	return (
		<div className={'bcard'}>
			<Card>
				<Card.Body>
					<div className={'bcard-title'}>Стаф</div>
					<div className={'bcard-title-img'}><img className="head-c-img" src={img}/></div>
					<Attribute type={'text-link'} param={'Автор:'} text={'Владимиров Денис'}/>
					<Attribute type={'text-link'} param={'Читает:'} text={'Нечаев Радион'}/>
					<Attribute type={'text-time'} param={'Длительность:'} text={'09:58:30'}/>
					<div className="bcard-short-text">Мир Нинеи – это конвейер. Конвейер ее Величества Смерти. Он с
						легкостью
						вбирает и перемалывает десятки тысяч жизней ежечасно. Облизывается и орет: «Еще, еще и еще!».
						Тут
						социальный статус определяет сила и… кровь. Первое зачастую следствие второго. ...
					</div>
					<ShortBottom/>
				</Card.Body>
			</Card>
		</div>
	);
};
export default BookCard;