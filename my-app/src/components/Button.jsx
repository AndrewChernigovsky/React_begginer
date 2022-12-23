import { useState } from "react";
import styled from "styled-components/macro";
import "./divWrapper.css";
import Button1 from "./Button1"

const StyledDiv = styled.div`
	color: black;
	border: 2px solid black;
	padding: 1rem;
	border-radius: 15px;
	heght: 40px;
	min-width: 200px;
	font-size: 80px;
	max-width: 300px;
	margin: 0 auto;
	margin-bottom: 20px;
`

const StyledCount = styled.div`
	color: black;
	border: 2px solid black;
	padding: 1rem;
	border-radius: 15px;
	heght: 40px;
	min-width: 200px;
	font-size: 80px;
	max-width: 300px;
	margin: 0 auto;
	margin-bottom: 20px;
`

export default function Button() {

	const [count, setCount] = useState(0);

	return <>
		<StyledCount>{count}</StyledCount>
		<div className="wrapper">
			<Button1 fun={() => setCount(count + 1)} text = 'plus'/>
			<Button1 fun={() => setCount(count - 1)} text = 'minus'/>
			<Button1 fun={() => setCount(0)} text = 'reset'/>
		</div>
	</>
}

