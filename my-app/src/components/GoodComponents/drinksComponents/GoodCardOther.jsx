import React from 'react'
import styled from 'styled-components/macro'
import ButtonAddtoCart from '../ButtonAddtoCart'

const StyledDescription = styled.div`
  color: black;
  border: 2px solid black;
  padding: 1rem;
  border-radius: 15px;
  min-width: 200px;
  font-size: 20px;
  margin-bottom: 10px;
  display: grid;
`
const StyledText = styled.p`
  color: black;
  font-size: 16px;
`
const StyledImageWrapper = styled.div`
  max-width: 300px;
  min-height: 160px;
  margin-bottom: 10px;
`
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
// принимаем данные из массива DescriptionGood, и функции для отображения заказа
export default function GoodCardOther({
  name,
  price,
  img,
  setOrder,
  order,
  setModal,
  fillings,
}) {
  return (
    <StyledDescription>
      <StyledText>
        <strong>Название:</strong> {name}
      </StyledText>
      <StyledText>
        <strong>Стоимость: </strong>
        {price} <strong>P</strong>
      </StyledText>
      <StyledImageWrapper>
        <StyledImage src={img}></StyledImage>
      </StyledImageWrapper>
      {/* передаем в кнопку эти параметры */}
      <ButtonAddtoCart
        name={name}
        price={price}
        img={img}
        setOrder={setOrder}
        order={order}
        setModal={setModal}
        fillings={fillings}
        text="Add"
      />
    </StyledDescription>
  )
}
