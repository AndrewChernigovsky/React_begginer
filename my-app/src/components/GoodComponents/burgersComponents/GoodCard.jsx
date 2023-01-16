import React from 'react';
import ButtonAddtoCart from './../ButtonAddtoCart';

// принимаем данные из массива DescriptionGood, и функции для отображения заказа
export default function GoodCard({
	name,
	price,
	img,
	setOrder,
	order,
	setModal,
	fillings,
}) {
	return (
		<div className="goods">
			<div className="goods-image">
				<img src={img}></img>
			</div>
			<div className="goods__text-wrapper">
				<p className="goods__text"> {name}</p>
				<p className="goods__text">
					{price} <span className="base-text">P</span>
				</p>
			</div>
			{/* передаем в кнопку эти параметры */}
			<ButtonAddtoCart
				name={name}
				price={price}
				img={img}
				setOrder={setOrder}
				order={order}
				fillings={fillings}
				setModal={setModal}
				text="Добавить в заказ"
			/>
		</div>
	);
}
