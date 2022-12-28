import styled from "styled-components/macro";
import './../../App.css'
import GoodCardOrder from "./GoodCardOrder";
import { useState } from "react";
import { useModal } from "./../Hooks/useModal";
import React from "react";

const StyledOverlay = styled.div`
	background-color: rgba(2, 17, 20, 0.6);
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 10;
	display: none;
`

export default function Modal({ name, price, img, setOrder, order }) {

	const modal = useModal()

	const closeModal = (e) => {
		if (modal.setIsOpen && e.target.id === 'overlay') {
			e.target.style.display = 'none'
		}
	}

	return <>
		<StyledOverlay id='overlay' onClick={closeModal}>
			<div className="modal">
				<h2>Ваш заказ</h2>
				<GoodCardOrder name={name} price={price} img={img} setOrder={setOrder} order={order} />
			</div>
		</StyledOverlay>
	</>
}
