import { useState } from "react";
import GoodCard, { result } from "./GoodCard"
import styled from "styled-components/macro";
import DescriptionGood from "./DescriptionGood"

const StyledWrapperCards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-beetwen;
	align-items: center;
`
const StyledImage = styled.img`
	min-width: 200px;
	margin: 20px;
`
const StyledText = styled.p`
	color: black;
	font-size: 16px;
`
const GoodCards = () => {
	const [values, setValue] = useState(DescriptionGood.burger);

	const result = values.map((value, index) => {
		return (<div key={value.name + index}>
			<StyledText><strong>Название:</strong> {value.name}</StyledText>
			<StyledText><strong>Стоимость: </strong>{value.price} <strong>P</strong></StyledText>
			<StyledImage src={value.img}></StyledImage>
			</div>)
	})

	return <StyledWrapperCards>
		{result}
	</StyledWrapperCards>
}

export default GoodCards;