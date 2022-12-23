import styled from "styled-components/macro";

let blue = blue;

const StyledButton = styled.button`
	color: black;
	border: 2px solid black;
	padding: 2rem;
	border-radius: 50%;
	font-size: 40px;
	transition-duration: 1.7s;

	&:hover {
		opacity: 0.8;
		cursor: pointer;
		color: ${blue};
		transition-duration: 1.7s;
	}

`

let array = [
	0,1,2,3,4,5,6,7,8,9,10
]

function Button1() {
	return <StyledButton onClick={() => counter()}>push me</StyledButton>
};
function Div1(props) {
	return <div>{props.count}</div>
};

function Div2(count) {
	return <div>{count = 1}</div>
}

export default function Button() {
	
	return <>
		<Button1/>
		<Div2/>
	</>
}