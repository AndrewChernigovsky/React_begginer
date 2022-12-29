import React from "react";
import ButtonAddtoCart from "./../ButtonAddtoCart";

// принимаем данные из массива DescriptionGood, и функции для отображения заказа
export default function GoodCard({ name, price, img, setOrder, order, setModal, fillings}) {

	return (<div className="goods">
		<div className="goods__text-wrapper">
			<p className="goods__text"><span className="base-text cost">Название:</span> {name}</p>
			<p className="goods__text"><span className="base-text cost">Стоимость: </span>{price} <span className="base-text">P</span></p>
		</div>
		<div className="goods-image">
			<img src={img}></img>
		</div>
			{/* передаем в кнопку эти параметры */}
		<ButtonAddtoCart name={name} price={price} img={img} setOrder={setOrder} order={order} fillings={fillings} setModal={setModal} text='Добавить в заказ' />
	</div>
	)
}