import styled from "styled-components/macro";
import './../../App.css'
import GoodCardOrder from "./GoodCardOrder";

export default function Modal() {

	return <>
		<div id='overlay'></div>
		<div className="modal">
			<h2>Ваш заказ</h2>
			<GoodCardOrder />
		</div>
	</>
}
