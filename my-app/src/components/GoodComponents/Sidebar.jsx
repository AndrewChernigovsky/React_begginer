import { useState } from "react";
import GoodCardOrder from "./GoodCardOrder"

// В параметрах мы принимаем данные из родителя(<Header/>)
function Sidebar({ order }) {
	let disabled = false;

	// let [isPrice, setPrice] = useState([]);

	const totalPrice = () => {
		let x;
		order.map((item) => {
			x = item.price
			console.log('1', x)
			return console.log('1', x)
		})
	}

	// if (isPrice >= 100) {
	// 	disabled = false
	// }

	return (
		<aside className="sidebar">
			<h2 className="sidebar__title">Список заказов</h2>

			<div className="sidebar__wrapper">
				{order.map((item, index) => {
					return (
						<GoodCardOrder
							key={item.name + index}
							name={item.name}
							price={item.price}
							img={item.img}
							count={item.count}
						/>
					);
				})}

				<button className="buttonAddtoCart"  onClick={(() => {totalPrice()})}>Оформить заказ</button>
			</div>
		</aside>
	);
}

export default Sidebar;