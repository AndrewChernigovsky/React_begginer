import GoodCards from "./GoodComponents/GoodCards"
import Sidebar from "./GoodComponents/Sidebar"
import { useState } from "react";
import React from "react";
import styled from "styled-components/macro";

const StyledWrapper = styled.div`
	display: flex;
`


function Header() {
	const [order, setOrder] = useState([]);

	return <div>
		<StyledWrapper>
			<Sidebar setOrder={setOrder} order={order} />
			<GoodCards setOrder={setOrder} order={order} />
		</StyledWrapper>
	</div>
}

export default Header;