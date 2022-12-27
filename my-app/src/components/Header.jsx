import GoodCards from "./GoodComponents/GoodCards"
import Sidebar from "./GoodComponents/Sidebar"
import { useState } from "react";
import React from "react";
import styled from "styled-components/macro";
import Modal from "./GoodComponents/Modal"

const StyledWrapper = styled.div`
	display: flex;
`
function Header() {
	// заводим стейт для слежение и записи массива заказов(<Sidebar/>), по умолчанию пустой,
	const [order, setOrder] = useState([]);

	return <div>
		<StyledWrapper>
			{/* передаем доступ до функций и переменной стейта в компоненты дальше */}
			<Sidebar setOrder={setOrder} order={order} />
			<GoodCards setOrder={setOrder} order={order} />
			<Modal/>
		</StyledWrapper>
	</div>
}

export default Header;