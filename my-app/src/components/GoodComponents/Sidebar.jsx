import { useState, useEffect } from 'react';
import GoodCardOrder from "./GoodCardOrder"
import Trash from './trash';
import totalPrice from './../../functions/pricecircle';

// В параметрах мы принимаем данные из родителя(<Header/>)
export default function Sidebar({ order, setOrder }) {
	let [isPrice, setPrice] = useState(0);
	let [totalCount, setTotalCount] = useState(0);
	
	const totalPrice = () => {
		let totalCost = 0;
		order.forEach((item) => {
			totalCost += item.price * item.count;
		})
		return totalCost;
	}
	
	const totalCounts = () => {
		let startCount = 0;
		order.forEach((item) => {
			startCount += item.count;
		})
		return startCount;
	}

	useEffect(() => {
		setPrice(totalPrice());
		setTotalCount(totalCounts());
	}, [order]);

	return (
		<aside className="sidebar">
			<div className="sidebar__wrapper-title">
				<h2 className="sidebar__title">Список заказов</h2>
				<button
					className="resetOrders buttonAddtoCart"
					type="button"
					disabled={!order.length}
					onClick={() => {
						setOrder([]);
					}}
				>
					<Trash />
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
							choise={item.choises}
						/>
					);
				})}

				<div className="totalPrice">
					<span className="totalPrice__text">Итог: </span>
					<span>{totalPrice().toFixed(2)}</span>
					<span> Руб.</span>
					<span>{totalCount}</span>
				</div>
			</div>
			<button className="buttonAddtoCart" disabled={!(isPrice > 1000)}>
				Оформить заказ
			</button>
		</aside>
	);
}