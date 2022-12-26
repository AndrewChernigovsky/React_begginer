import { useState } from "react";
import GoodCard from "./GoodCard";
import styled from "styled-components/macro";
import DescriptionGood from "./DescriptionGood"

const StyledWrapperCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
	align-content: baseline;
`

function GoodCards({setOrder, order}) {
	const [items, setItem] = useState(DescriptionGood.burger);

	return	<StyledWrapperCards>{
		items.map((item, index) => {

			return <GoodCard
				key={item.name + index}
				name={item.name}
				price={item.price}
				img={item.img}
				order={order}
				setOrder={setOrder}
			/> 
		})
	}
	</StyledWrapperCards>
}

export default GoodCards;