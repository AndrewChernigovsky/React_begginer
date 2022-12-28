import React from "react";
import styled from "styled-components/macro";

const StyledDescription = styled.div`
	color: black;
	border: 2px solid black;
	padding: 1rem;
	border-radius: 15px;
	heght: 20px;
	min-width: 200px;
	max-width: max-content;
	font-size: 20px;
	margin-bottom: 20px;
	display: block;
`
const StyledImageWrapper = styled.div`
	max-width: 300px;
	margin-bottom: 10px;
`
const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`
const StyledText = styled.p`
	color: black;
	font-size: 16px;
`

export default function GoodCardOrder({ name, price, img, count }) {

	return (<StyledDescription>

		<StyledText><strong>Название:</strong> {name}</StyledText>
		<StyledText><strong>Стоимость: </strong>{price*count} <strong>P</strong></StyledText>
		<StyledText><strong>Количество: </strong>{count}</StyledText>
		<StyledImageWrapper>
			<StyledImage src={img}></StyledImage>
		</StyledImageWrapper>
	</StyledDescription>)
}