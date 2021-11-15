import React, {useState} from "react";
import './Attribute.scss';


export const Attribute = (props) => {

	//text-link
	let type = props.type;
	let param = props.param;
	let text = props.text;

	if (type === 'text-link') {
		return (
			<div className={'book-attr-' + type}>
				<div>{param}<a className={'link'} href={'/'}>{text}</a>
				</div>
			</div>
		);
	}

	if (type === 'text-time') {
		return (
			<div className={'book-attr-' + type}>
				<div>{param}<b>{text}</b>
				</div>
			</div>
		);
	}


};
export default Attribute;