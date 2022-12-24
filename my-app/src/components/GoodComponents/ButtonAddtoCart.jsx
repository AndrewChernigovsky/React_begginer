import styled from "styled-components/macro";

let arrColors = [
	{
		blue: '#152EFA',
		orange: '#e66700',
	}
]

const StyledButton = styled.button`
	color: black;
	border: 2px solid black;
	padding: 2rem;
	border-radius: 15px;
	heght: 40px;
	min-width: 200px;
	font-size: 40px;
	margin-bottom: 20px;

	&:hover {
		opacity: 0.8;
		cursor: pointer;
		color: ${arrColors[0].blue};
		transition-duration: 0.3s;
	}
`

export default function ButtonAddtoCart({fun, text}) {
	return <StyledButton onClick={fun}>{text}</StyledButton>
};
