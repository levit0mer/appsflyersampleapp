import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';
import CartSvg from '../assets/icons/header/cart.svg'; // Update the path to your SVG file

interface CartIconProps {
  itemCount: number;
}

const CartIcon: React.FC<CartIconProps> = ({ itemCount }) => {
  return (
    <View style={styles.container}>
      {/* Replace with your SVG */}
      <CartSvg width={30} height={30}/>
      {itemCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{itemCount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -10,
    backgroundColor: '#007bff',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CartIcon;
