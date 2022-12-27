
import styled from "styled-components/macro";
import GoodCardOrder from "./GoodCardOrder"

const StyledSidebar = styled.div`
	min-height: 100%;
	max-width: 400px;
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
function Sidebar({ setOrder, order}) {
	let count = 0;
	let price = 0;
	let nameOrder = '';

	return <StyledSidebar>
		<h2>Sidebar</h2>

		{order.map((item, index) => {
			count = 1 + index;
			price += item.price;
			nameOrder += item.name+', ';
				
			return <GoodCardOrder index={index} key={item.name + index} name={item.name} price={item.price} img={item.img} setOrder={setOrder} order={order} />
		})}

		<StyledCounterAll>
			<p><strong>Название: </strong>{nameOrder} </p>
			<p><strong>Количество: </strong>{count} </p>
			<p><strong>Стоимость: </strong>{price} Рублей </p>
		</StyledCounterAll>
		

	</StyledSidebar>
}

export default Sidebar;