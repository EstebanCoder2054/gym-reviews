import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={styles.header}
    >
      <MaterialIcons
        name='menu'
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/heart_logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flex: 1,
    width: '150%',
    height: '110%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    // marginLeft: -100,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 3,
  },
  icon: {
    display: 'flex',
    flex: 1,
    marginLeft: 10,
  },
  headerTitle: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  headerImage: {
    display: 'flex',

    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
