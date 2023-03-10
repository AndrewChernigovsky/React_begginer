import { useState } from "react";
import GoodCard from "./GoodCard";
import styled from "styled-components/macro";
import DescriptionGood from "../DescriptionGood"

const StyledWrapperCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 20px;
	align-content: baseline;
`
// В параметрах мы принимаем данные из родителя(<Header/>)
function GoodCards({ setOrder, order, setModal}) {
	// Принимаем данные в новый стейт из основного массива данных о всех заказах DescriptionGood
	const [items, setItem] = useState(DescriptionGood.burger);

	// Записываем в результат функции компонент, который она нам возвращает
	return <>
		<section className="burgers-section">
			<h2>Burgers</h2>
			<StyledWrapperCards>{

				// проходимся по массиву данных стейта и передаем в карточку все свойства, которые нам нужны
				items.map((item, index) => {
					// также передаем пустой массив с невыбранными заказами и функцию для установки 
					return <GoodCard
						key={item.name + index}
						name={item.name}
						price={item.price}
						img={item.img}
						order={order}
						setOrder={setOrder}
						setModal={setModal}
						fillings={item.fillings}
					/>
				})
			}
			</StyledWrapperCards>
		</section>
	</>
}

export default GoodCards;