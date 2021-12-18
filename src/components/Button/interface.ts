import { TouchableHighlightProps } from 'react-native';

type SizeButtonType = "small" | "medium" | "large";
type ColorButtonType = "primary" | "secondary" | "white";

interface LabelButtonProps extends TouchableHighlightProps{
  label: string;
  onPress: () => void;
}

interface IconButtonProps extends TouchableHighlightProps{
  onPress: () => void;
  children: React.ReactNode;
}

interface IconLabelButtonProps extends TouchableHighlightProps{
  label: string;
  onPress: () => void;
}

export interface StyledLabelButtonProps extends LabelButtonProps{
  size?: SizeButtonType;
  color?: ColorButtonType;
  hasShadow?: boolean;
}

export interface StyledIconLabelButtonProps extends IconLabelButtonProps{
  size?: SizeButtonType;
  color?: ColorButtonType;
  hasShadow?: boolean;
}

export interface StyledIconButtonProps extends IconButtonProps{
  size?: SizeButtonType;
  color?: ColorButtonType;
  hasShadow?: boolean;
}
