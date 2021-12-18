import styled from 'styled-components/native'
import { fonts } from '../../styles/fonts'

const Title = styled.Text`
  color: ${({theme}) => theme.colors.typografy.title.primary};
`

export const Text:any = styled.Text`
  color: ${({theme}) => theme.colors.typografy.paragraph.primary};
`

export const Display = styled(Title)`
  font-size: 40px;
  font-family: ${fonts.subtitle};
  color: ${({theme}) => theme.colors.typografy.display.primary};
`;

export const H1 = styled(Title)`
  font-size: 30px;
  line-height: 34px;
  font-family: ${fonts.heading};
`;

export const H2 = styled(Title)`
  font-size: 20px;
  line-height: 34px;
  font-family: ${fonts.subtitle};
`;

export const H3 = styled(Title)`
  font-size: 16px;
  font-family: ${fonts.subtitle};
`;

Text.Subtitle = styled(Text)`
  font-size: 18px;
  font-family: ${fonts.text};
`

Text.SubtitleBold = styled(Text)`
  font-size: 18px;
  font-family: ${fonts.heading};
`

Text.Medium = styled(Text)`
  font-size: 16px;
  font-family: ${fonts.display};
`

Text.Small = styled(Text)`
  font-size: 13px;
  line-height: 13px;
  font-family: ${fonts.text}
`
