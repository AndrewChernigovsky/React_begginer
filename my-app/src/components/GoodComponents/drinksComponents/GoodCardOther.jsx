import React from 'react'
import styled from 'styled-components/macro'
import ButtonAddtoCart from '../ButtonAddtoCart'
import totalPrice from './../../../functions/pricecircle';

const StyledDescription = styled.div`
  color: black;
  border: 2px solid black;
  padding: 1rem;
  border-radius: 15px;
  min-width: 200px;
  font-size: 20px;
  margin-bottom: 10px;
  display: grid;
`
const StyledText = styled.p`
  color: black;
  font-size: 16px;
`
const StyledImageWrapper = styled.div`
  max-width: 300px;
  min-height: 160px;
  margin-bottom: 10px;
`
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
// принимаем данные из массива DescriptionGood, и функции для отображения заказа
export default function GoodCardOther({
  name,
  price,
  img,
  setOrder,
  order,
  setModal,
  fillings,
}) {

	let prices = totalPrice(price);
	
	return (
		<div className="goods">
			<div className="goods-image-icon tea">
				<img src="/images/icons/tea.png" alt="" />
			</div>
			<div className="goods-image">
				<img src={img}></img>
			</div>
			<div className="goods__text-wrapper">
				<p className="goods__text"> {name}</p>
				<p className="goods__text">
					{prices} <span className="base-text">P</span>
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
