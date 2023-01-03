// принимаем все параметры из карточки и устанавливаем значение для функции и текста
export default function ButtonAddtoCart({
	text,
	setModal,
	name,
	img,
	price,
	fillings,
}) {
	return (
		<button
			className="buttonAddtoCart"
			onClick={() => {
				setModal({ name, img, price, fillings });
			}}
		>
			{text}
		</button>
	);
}
