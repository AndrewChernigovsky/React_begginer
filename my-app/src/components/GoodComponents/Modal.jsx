import styled from 'styled-components/macro';
import GoodCardOrder from './GoodCardOrder';
import { useState, useEffect } from 'react';
import Checkboxs from './Checkboxs';

const StyledWrapperButtons = styled.div`
	display: flex;
	padding: 1rem;
	justify-content: space-between;
`;
const StyledButton = styled.button`
	color: black;
	border: 2px solid black;
	padding: 0.5rem;
	border-radius: 15px;
	heght: 60px;
	max-width: 100px;
	min-width: 50px;
	font-size: 20px;
	margin-bottom: 20px;
	margin: 0.4rem;

	&:hover {
		opacity: 0.8;
		cursor: pointer;
		color: ;
		transition-duration: 0.3s;
	}
`;

export default function Modal({ setModal, modal, setOrder, order}) {
	const arrOrders = [];

	for (let i = 1; i <= arrOrders.length; i++) {
		arrOrders.push(modal);
	}

	const [count, setCount] = useState(1);

	const closeModal = (e) => {
		if (e.target.id === 'overlay') {
			setModal(null);
		}
	};

	const pushOrder = (choises) => {
		setOrder([...order, { ...modal, count, choises}]);
		setModal(null);
	};


	const getCheckedCheckBoxes = () => {
		let checkboxes = document.getElementsByClassName('checkbox');
		let checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать
		for (let index = 0; index < checkboxes.length; index++) {
			if (checkboxes[index].checked) {
				checkboxesChecked.push(checkboxes[index].value); // положим в массив выбранный
			}
		}
		return checkboxesChecked; // для использования в нужном месте
	}

	return (
		<>
			<div
				className="overlay"
				id="overlay"
				onClick={(e) => {
					closeModal(e);
				}}
			>
				<div className="modal">
					<GoodCardOrder
						name={modal.name}
						price={modal.price}
						img={modal.img}
						count={count}
						choise={modal.fillings}
					/>
					<StyledWrapperButtons>
						<div className="buttonCountersWrap">
							<button
								className="buttonAddtoCart"
								disabled={count === 1}
								onClick={() => {
									setCount(count - 1);
								}}
							>
								{' '}
								-{' '}
							</button>
							<button
								className="buttonAddtoCart"
								onClick={() => {
									setCount(count + 1);
								}}
							>
								{' '}
								+{' '}
							</button>
						</div>
					</StyledWrapperButtons>

					<form onSubmit={(e) => {
						console.log(e);
						pushOrder(getCheckedCheckBoxes());
					}}>
						{modal.fillings &&
							modal.fillings.map((item) => {
								return <Checkboxs key={item} item={item} />;
							})}
						<button
							className="buttonAddtoCart pushButton"
							type='submit'
						>
							{' '}
							готово{' '}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
