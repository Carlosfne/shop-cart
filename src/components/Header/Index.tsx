import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { fonts } from "../../styles/fonts";
import { theme } from "../../styles/colors";

import logo from '../../assets/logo.png';

interface HeaderProps {
  style?: {}
}

export const Header = ({ style, ...rest}: HeaderProps) => {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 15,
      marginBottom: 35,
      ...style
    },
    logo: {
      opacity: 0.9,
      width: 35,
      height: 35
    },
    date: {
      fontFamily: `${fonts.text}`,
      fontSize: 18,
      color: `${theme.colors.typografy.paragraph.secondary}`,
    },
  });

  return (
    <View style={styles.container} {...rest}>
      {/* <LogoImg width={25} height={25} style={styles.logo} /> */}
      <Image style={styles.logo} source={logo} />
      <Text style={styles.date} >
        { currentDate }
      </Text>
    </View>
  );
};


