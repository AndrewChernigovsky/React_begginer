import styled from "styled-components/macro";
import React from "react";
import GoodCardOrder from "./GoodCardOrder"

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
const StyledButton = styled.button`
	color: black;
	border: 2px solid black;
	padding: 0.5rem;
	border-radius: 15px;
	heght: 60px;
	max-width: 100px;
	font-size: 20px;
	margin-bottom: 20px;

	&:hover {
		opacity: 0.8;
		cursor: pointer;
		color: ;
		transition-duration: 0.3s;
	}
`

export default function Modal({ setOrder, order, setModal, modal }) {

	let count = 0;

	const closeModal = (e) => {
		if (e.target.id === "overlay") {
			setModal(null);
			console.log('close')
			console.log(modal)
		}
	}
	const removeOrder = (e) => {
		if (e.target.id === "removeButton") {
			if (modal == 0) {
				setModal(null)
			}
		}
	}

	return <>
		<StyledOverlay id='overlay' onClick={(e) => {closeModal(e)}}>
			<StyledModal>
				<h2>Ваш заказ</h2>
					<GoodCardOrder name={modal.name} price={modal.price} img={modal.img} setOrder={setOrder} order={order} setModal={setModal} modal={modal} />
				<StyledButton id='removeButton' onClick={(e) => { removeOrder(e)}} >-</StyledButton>
				{/* <StyledButton id='addButton' onClick={(e) => { removeOrder(e)}} >+</StyledButton> */}
			</StyledModal>
		</StyledOverlay>
	</>
}
