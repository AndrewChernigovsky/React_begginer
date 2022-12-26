
import styled from "styled-components/macro";
import GoodCardOrder from "./GoodCardOrder"

const StyledSidebar = styled.div`
	min-height: 100%;
	max-width: 400px;
	min-width: 300px;
	border: 1px solid black;
	display: grid;
	align-content: start;
	margin-bottom: 0rem;
	padding: 1rem;
	margin-right: 20px;
	transition: 1s ease-in-out;
	border-radius: 15px;


	p {
		font-size: 25px;
	}
`
// const StyledOrderContent = styled.div`
// 	height: 300px;
// 	min-width: 200px;
// 	border: 1px solid black;
// 	display: grid;
// 	margin: 0 auto;
// 	margin-bottom: 2rem;
// 	padding: 2rem;
// `

function Sidebar({ setOrder, order }) {

	return <StyledSidebar>
		<h2>Sidebar</h2>
		{order.map((item) => {
			return <GoodCardOrder name={item.name} price={item.price} img={item.img} setOrder={setOrder} />
		})}

	</StyledSidebar>
}

export default Sidebar;