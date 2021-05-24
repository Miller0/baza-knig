import React, {useState} from "react";
import './ShortBottom.scss';


export const ShortBottom = (props) => {

	let prefix = "book-card-";
	let imgLike = 'https://baza-knig.ru/templates/knigi/img/like.png';
	let imgDislike = 'https://baza-knig.ru/templates/knigi/img/dislike.png';
	let imgComments = 'https://baza-knig.ru/uploads/13599.png';

	return (
		<div className={prefix + 'short-bottom'}>
			<a href="/" className={prefix+'short-link'}>Подробнее</a>

			<div className={prefix + 'short-rate'}>
				<a href="#" title="Нравится(+)" onClick="alert(1);">
					<img src={imgLike} alt=""/>
					10
				</a>

				<a href="#" title="Не нравится(-)" onClick="alert(1);">
					<img src={imgDislike} alt=""/>
					7
				</a>
			</div>
			<div className={prefix + 'comments'}><img src={imgComments} alt=""/>0</div>
		</div>
	);
};
export default ShortBottom;