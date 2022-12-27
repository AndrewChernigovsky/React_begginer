import styled from "styled-components/macro";
import './../../App.css'
import GoodCardOrder from "./GoodCardOrder";
import { useState } from "react";
import { useModal } from "./../Hooks/useModal";
import React from "react";

export default function Modal() {

	const modal = useModal()


	const closeModal = (e) => {
		if (!modal.setIsOpen) {
			(e.target.id === 'overlay').remove()
		} else {

		}
	}

	return <>
		<div id='overlay' onClick={closeModal}></div>
		<div className="modal">
			<h2>Ваш заказ</h2>
			<GoodCardOrder />
		</div>
	</>
}
