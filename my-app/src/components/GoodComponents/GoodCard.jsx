import styled from "styled-components/macro";
import ButtonAddtoCart from "./ButtonAddtoCart";

const StyledDescription = styled.div`
	color: black;
	border: 2px solid black;
	padding: 2rem;
	border-radius: 15px;
	heght: 20px;
	min-width: 200px;
	font-size: 20px;
	margin-bottom: 20px;
	display: grid;
`
const StyledImage = styled.img`
	min-width: 200px;
	margin: 20px;
`
const StyledText = styled.p`
	color: black;
	font-size: 16px;
`


export default function GoodCard({ name, price, img }) {
	function foo() {
		console.log('added')
		console.log(name);
		console.log(price);
	}

	return (<StyledDescription>
		<StyledText><strong>Название:</strong> {name}</StyledText>
		<StyledText><strong>Стоимость: </strong>{price} <strong>P</strong></StyledText>
		<StyledImage src={img}></StyledImage>
			<ButtonAddtoCart fun = {foo} text = 'Add' />
	</StyledDescription>)
}