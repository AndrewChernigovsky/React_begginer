
import styled from "styled-components/macro";
import GoodCardOrder from "./GoodCardOrder"

const StyledSidebar = styled.div`
	min-height: 100%;
	max-width: 350px;
	min-width: 350px;
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
const StyledCounterAll = styled.div`

	p {
		font-size: 25px;
	}
`
// В параметрах мы принимаем данные из родителя(<Header/>)
function Sidebar({order}) {

	return <StyledSidebar>
		<h2>Sidebar</h2>

		{order.map((item, index) => {
			return <GoodCardOrder
				key={item.name + index}
				name={item.name}
				price={item.price}
				img={item.img}
				count={item.count} />
		})}

		<StyledCounterAll>
		</StyledCounterAll>
		 

	</StyledSidebar>
}

export default Sidebar;