import { useState, useEffect } from 'react';
import GoodCardOrder from "./GoodCardOrder"

// В параметрах мы принимаем данные из родителя(<Header/>)
export default function Sidebar({ order }) {
	let [isPrice, setPrice] = useState(0);

	const totalPrice = () => {
		let totalCost = 0;
		order.map((item) => {
			totalCost += item.price * item.count;
		})
		return totalCost;
	}

	useEffect(() => {
		setPrice(totalPrice());
	}, [order]);

	const [isOrders, setOrders] = useState(true);

	const resetOrders = () => {
		order.map((index) => {
			
		})
	}

	// useEffect(() => {
	// 	setOrders(resetOrders());
	// }, [order]);

	
	return (
		<aside className="sidebar">
			<div className="sidebar__wrapper-title">
				<h2 className="sidebar__title">Список заказов</h2>
				<button className="resetOrders buttonAddtoCart" type="button"  onClick={()=> {resetOrders()}}>
					DEL
				</button>
			</div>

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

				<button
					className="buttonAddtoCart"
					disabled={!(isPrice > 1000)}
				>
					Оформить заказ
				</button>
			</div>
		</aside>
	);
}