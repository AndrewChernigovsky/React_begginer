import { useState } from "react";
import styled from "styled-components/macro";
import ButtonAddtoCart from "./ButtonAddtoCart";
import DescriptionGood from "./DescriptionGood"

const StyledDescription = styled.div`
	color: black;
	border: 2px solid black;
	padding: 2rem;
	border-radius: 15px;
	heght: 40px;
	min-width: 200px;
	font-size: 40px;
	margin-bottom: 20px;
`
const StyledImage = styled.img`
	min-width: 200px;
	margin: 20px;
`
const StyledText = styled.p`
	color: black;
	font-size: 16px;
`
let result;

export default function GoodCard (){
	const [values, setValue] = useState(DescriptionGood.burger);

	result = values.map(value => {
		return <>
			<StyledText>{value.name}</StyledText>
			<StyledText>{value.id}</StyledText>
			<StyledText>{value.price}</StyledText>
			<StyledText>{value.img}</StyledText>
		</>
	})
}