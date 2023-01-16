import React from 'react';
import totalPrice from './../../functions/pricecircle';

// передаем пропсы из компонента GoodCards
export default function GoodCardOrder({ name, price, img, count, choise }) {
	let prices = totalPrice(price * count);
	
	return (
		<div className="goods">
			<div className="goods-image-icon">
				<img src="/images/icons/burger.png" alt="" />
				<span className="goods__text count">{count}x</span>
			</div>

			<div className="goods-image image-order">
				<img src={img}></img>
			</div>
			<div className="goods__text-wrapper order-text-wrapper">
				<p className="goods__text"> {name}</p>
				<p className="goods__text">
					{prices}
					<span className="subtitle base-text">P</span>
				</p>
			</div>
			<p className="goods__text choise">Начинка: {choise}</p>
		</div>
	);
}
