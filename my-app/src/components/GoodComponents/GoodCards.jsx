import { useState } from "react";
import GoodCard from "./GoodCard";
import styled from "styled-components/macro";
import DescriptionGood from "./DescriptionGood"

const StyledWrapperCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-beetwen;
	align-items: center;
	gap: 20px;
`

function GoodCards() {
	const [items, setItem] = useState(DescriptionGood.burger);

	return	<StyledWrapperCards>{
		items.map((item, index) => {

			return <GoodCard
				key={item.name + index}
				name={item.name}
				price={item.price}
				img={item.img}
			/> 
		})
	}
	</StyledWrapperCards>


}

export default GoodCards;