import styled from 'styled-components/macro';
import GoodCardOrder from './GoodCardOrder';
import { useState, useEffect } from 'react';

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
	const [checked, setChecked] = useState(false);

	const closeModal = (e) => {
		if (e.target.id === 'overlay') {
			setModal(null);
		}
	};

	const pushOrder = () => {
		setOrder([...order, { ...modal, count}]);
		setModal(null);
	};

	const arrCheck = [];

	const handleChange = (e) => {
		var value = e.target.value;
		if (e.target.checked) {
			console.log('✅ Checkbox is checked');
			for (let i = 1; i <= arrCheck.length; i++) {
				arrCheck.push(value);
			}
	
		
		} else {
			console.log('⛔️ Checkbox is NOT checked');
		}
		setChecked(!checked);



		console.log('You selected ' + value);
		console.log('You selected arr' + arrCheck);
	}; 


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
						<button
							className="buttonAddtoCart pushButton"
							onClick={(e) => {
								pushOrder(e);
							}}
						>
							{' '}
							готово{' '}
						</button>

					</StyledWrapperButtons>
					<form>
						{modal.fillings &&
							modal.fillings.map((item) => {
								return (
									<div className="checkbox" key={item}>
										<label>
											{item}
											<input
												type="checkbox"
												name={item}
												value={item}
												onChange={handleChange}
											/>
										</label>
									</div>
								);
							})}
					</form>
				</div>
			</div>
		</>
	);
}
