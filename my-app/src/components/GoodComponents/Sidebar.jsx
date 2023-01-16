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
		order.map((item) => {
			totalCost += item.price * item.count;
		})
		return totalCost;
	}

	useEffect(() => {
		setPrice(totalPrice());
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
					<Trash/>
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
							choise={item.fillings}
						/>
					);
				})}

				<button
					className="buttonAddtoCart"
					disabled={!(isPrice > 1000)}
				>
					Оформить заказ
				</button>
				<div className='totalPrice'>
					<span className='totalPrice__text'>Итог: </span>
					<span>{totalPrice()}</span>
					<span> Руб.</span>
					<span>{
						order.map((item) => {
						
							totalCount += item.count;
							
							return Number(totalCount);
						})}
					</span>
				</div>
			</div>
		</aside>
	);
}