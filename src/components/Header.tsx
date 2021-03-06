import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import log from '../utilities/Logger';

interface IProps {
  headerText: string;
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  }
});

const Header = (props: IProps) => {
  // const { textStyle, viewStyle } = styles;
  return (
    <View>
      <Text>{props.headerText}</Text>
    </View>
  );
};

export default Header;