import styled from 'styled-components/native'
import { ProductItemProps } from './index'
import { themeColors } from '../../../styles/colors/colors'

export const ProductImage = styled.Image`
  width: 130px;
  height: 130px;
`

export const ProductContainer:any = styled.View<ProductItemProps>`
  width: 100%;
  max-width: 150px;
  min-height: 230px;
  border: 1.5px solid ${themeColors.cards.secondary};
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

ProductContainer.MainContent = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;

`
