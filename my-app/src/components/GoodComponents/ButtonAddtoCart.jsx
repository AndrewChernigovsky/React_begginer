import styled from "styled-components/macro";
import { useModal } from "./../Hooks/useModal";

let arrColors = [
	{
		blue: '#152EFA',
		orange: '#e66700',
	}
]

const StyledButton = styled.button`
	color: black;
	border: 2px solid black;
	padding: 0.5rem;
	border-radius: 15px;
	heght: 60px;
	max-width: 100px;
	font-size: 20px;
	margin-bottom: 20px;

	&:hover {
		opacity: 0.8;
		cursor: pointer;
		color: ${arrColors[0].blue};
		transition-duration: 0.3s;
	}
`
// принимаем все параметры из карточки и устанавливаем значение для функции и текста
export default function ButtonAddtoCart({ setOrder, text, order, name, price, img }) {

	const modal = useModal()

	const openModal = (e) => {
		if (!modal.setIsOpen) {
			e.target.style.display = 'block'
			console.log('open')
		}
	}

	return <StyledButton onClick={() => { setOrder([...order, { name, price, img }]); openModal }}>{text}</StyledButton>
};
