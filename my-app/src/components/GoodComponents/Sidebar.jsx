import GoodCardOrder from "./GoodCardOrder"

// В параметрах мы принимаем данные из родителя(<Header/>)
function Sidebar({order}) {

	return <aside className="sidebar">
		<h2 className="sidebar__title">Список заказов</h2>

		<div className="sidebar__wrapper">
			{order.map((item, index) => {
				return <GoodCardOrder
					key={item.name + index}
					name={item.name}
					price={item.price}
					img={item.img}
					count={item.count}
				/>
			})}

		</div>
	</aside>
}

export default Sidebar;