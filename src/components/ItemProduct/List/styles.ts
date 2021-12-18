import styled from 'styled-components/native'

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`

export const ProductContainer:any = styled.View`
  width: 100%;
 
  border: 1px solid ${({theme}) => theme.colors.cards.secondary };
  border-radius: 12px;
  padding: 10px;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  background-color: #fff;
`

ProductContainer.MainContent = styled.View`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

ProductContainer.MainContentTitle = styled.View`
  align-items: center;
`

ProductContainer.MainContentClose = styled.Pressable`
  width: 20px;
  height: 20px;
`

ProductContainer.MainContentCheck = styled.View`
  width: 40px;
  align-self: flex-start;
`
