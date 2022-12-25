import styled from "styled-components/macro";
import GoodCard from "./GoodCard"

const StyledSidebar = styled.div`
	height: 300px;
	min-width: 200px;
	border: 1px solid black;
	display: grid;
	margin: 0 auto;
	margin-bottom: 2rem;
	padding: 2rem;

	p {
		font-size: 45px;
	}
`

function Sidebar(currentCards) {

	return <StyledSidebar>
		<p>Sidebar</p>
		<div>
			<GoodCard/>
		</div>
	</StyledSidebar>
}

export default Sidebar;