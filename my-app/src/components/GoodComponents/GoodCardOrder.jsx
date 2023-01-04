import React from 'react';

export default function GoodCardOrder({name, price, img, count}) {
	return (
		<div className="goods">
			<div className="goods__text-wrapper">
				<p className="goods__text">
					<span className="subtitle base-text">Название:</span> {name}
				</p>
				<p className="goods__text">
					<span className="subtitle base-text">Стоимость: </span>
					{price* count}{' '}
					<span className="subtitle base-text">P</span>
				</p>
				<p className="goods__text">
					<span className="subtitle base-text">Количество: </span>
					{count}
				</p>
			</div>
			<div className="goods-image">
				<img src={img}></img>
			</div>
		</div>
	);
}
