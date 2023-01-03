import GoodCards from './GoodComponents/burgersComponents/GoodCards';
import GoodCardsOther from './GoodComponents/drinksComponents/GoodCardsOther';
import Sidebar from './GoodComponents/Sidebar';
import { useState } from 'react';
import React from 'react';
import styled from 'styled-components/macro';
import Modal from './GoodComponents/Modal';
import { useModal } from './Hooks/useModal';

const StyledWrapper = styled.div`
	display: flex;
`;
function Header() {
	// заводим стейт для слежение и записи массива заказов(<Sidebar/>), по умолчанию пустой,
	const [order, setOrder] = useState([]);
	const { modal, setModal } = useModal();

	return (
		<div>
			<StyledWrapper>
				{/* передаем доступ до функций и переменной стейта в компоненты дальше */}
				<Sidebar
					order={order}
				/>
				<div className="goodsWrapper">
					<GoodCards
						setModal={setModal}
						modal={modal}
						setOrder={setOrder}
						order={order}
					/>
					<GoodCardsOther
						setModal={setModal}
						modal={modal}
						setOrder={setOrder}
						order={order}
					/>
				</div>

				{modal && (
					<Modal
						setModal={setModal}
						modal={modal}
						order={order}
						setOrder={setOrder}
					/>
				)}
			</StyledWrapper>
		</div>
	);
}

export default Header;
