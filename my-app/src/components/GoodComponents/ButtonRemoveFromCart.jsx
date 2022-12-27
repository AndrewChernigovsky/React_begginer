import styled, { keyframes } from "styled-components/macro";

let arrColors = [
	{
		blue: '#152EFA',
		orange: '#e66700',
	}
]

const StyledButton = styled.button`
	color: black;
	border: 2px solid black;
	padding: 0.5rem;
	border-radius: 15px;
	heght: 60px;
	max-width: 100px;
	font-size: 20px;
	margin-bottom: 20px;

	&:hover {
		opacity: 0.8;
		cursor: pointer;
		color: ${arrColors[0].blue};
		transition-duration: 0.3s;
	}
`

export default function ButtonRemoveFromCart({setOrder, order, text, index }) {
	const removeCard = (index) => {
		setOrder([
			...order.slice(0, index),
			...order.slice(index + 1)
		]);
	}

	return <StyledButton onClick={() => {removeCard(index)}}>{text}</StyledButton>
};
