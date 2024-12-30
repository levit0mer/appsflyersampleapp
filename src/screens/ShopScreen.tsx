import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const ShopScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Categories Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['Electronics', 'Fashion', 'Home', 'Toys', 'Books'].map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Products Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Products</Text>
        <View style={styles.productGrid}>
          {[1, 2, 3, 4, 5, 6].map((product) => (
            <TouchableOpacity key={product} style={styles.productCard}>
              <Image
                source={{
                  uri: 'https://via.placeholder.com/150',
                }}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Product {product}</Text>
              <Text style={styles.productPrice}>$99.99</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Black/Gray for section titles
  },
  categoryCard: {
    backgroundColor: '#e3f2fd', // Light Blue
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // Minimal shadow
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff', // Blue for category text
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff', // White background for products
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000', // Subtle shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#007bff', // Blue for prices
  },
});

export default ShopScreen;
