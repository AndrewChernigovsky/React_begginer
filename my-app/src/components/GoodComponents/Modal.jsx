import styled from "styled-components/macro";
import React from "react";
import GoodCardOrder from "./GoodCardOrder"
import { useState } from "react";

const StyledOverlay = styled.div`
	background-color: rgba(2, 17, 20, 0.6);
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 10;
`
const StyledModal = styled.div`
	min-width: 500px;
	max-width: 500px;
	min-height: 50%;
	display: grid;
	grid-template-columns: 1fr;
	background-color: #fb8e00;
	position: absolute;
	z-index: 1;
	left: 50%;
	top: 50%;
	opacity: 1;
	transform: translate(-50%, -50%);
	padding: 1rem;
`
const StyledWrapperButtons = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: space-between;
`
const StyledButton = styled.button`
	color: black;
	border: 2px solid black;
	padding: 0.5rem;
	border-radius: 15px;
	heght: 60px;
	max-width: 100px;
	min-width: 50px;
	font-size: 20px;
	margin-bottom: 20px;
	margin: 0.4rem;

	&:hover {
		opacity: 0.8;
		cursor: pointer;
		color: ;
		transition-duration: 0.3s;
	}
`

export default function Modal({ setModal, modal, setOrder, order }) {
	
	const arrOrders = [];

	for (let i = 1; i <= arrOrders.length; i++) {
		arrOrders.push(modal);
		console.log(arrOrders)
		
	}

	const [count, setCount] = useState(1)

	const closeModal = (e) => {
		if (e.target.id === "overlay") {
			setModal(null);
		}
	}

	const pushOrder = () => {
		setOrder([...order, { ...modal, count }])
		setModal(null);
	}
	
	return <>
		<StyledOverlay id='overlay' onClick={(e) => {closeModal(e)}}>
			<StyledModal>
				<h2>Ваш заказ</h2>
				<GoodCardOrder name={modal.name} price={modal.price} img={modal.img} count={count} />
				<StyledWrapperButtons>
					<StyledButton disabled={count === 1} onClick={() => { setCount(count - 1) }} > - </StyledButton>
					<StyledButton onClick={() => { setCount(count + 1) }} > + </StyledButton>
					<StyledButton onClick={(e) => { pushOrder(e) }} > add </StyledButton>
				</StyledWrapperButtons>
			</StyledModal>
		</StyledOverlay>
	</>
}
