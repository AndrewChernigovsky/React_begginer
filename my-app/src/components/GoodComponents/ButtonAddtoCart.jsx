// принимаем все параметры из карточки и устанавливаем значение для функции и текста
export default function ButtonAddtoCart({text, setModal, name, img, price}){
	
	return <button className='buttonAddtoCart' onClick={() => {setModal({name, img, price})}}>{text}</button>
};
