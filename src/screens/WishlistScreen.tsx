import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const WishlistScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Wishlist Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Wishlist</Text>
      </View>

      {/* Wishlist Items */}
      <View style={styles.wishlistGrid}>
        {[1, 2, 3, 4].map((item) => (
          <TouchableOpacity key={item} style={styles.wishlistCard}>
            <Image
              source={{
                uri: 'https://via.placeholder.com/150',
              }}
              style={styles.wishlistImage}
            />
            <View style={styles.wishlistDetails}>
              <Text style={styles.wishlistTitle}>Wishlist Item {item}</Text>
              <Text style={styles.wishlistPrice}>$99.99</Text>
            </View>
            <TouchableOpacity style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Black/Gray for header text
  },
  wishlistGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  wishlistCard: {
    width: '48%',
    backgroundColor: '#fff', // White background for cards
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000', // Subtle shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  wishlistImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  wishlistDetails: {
    alignItems: 'center',
    marginBottom: 10,
  },
  wishlistTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  wishlistPrice: {
    fontSize: 14,
    color: '#007bff', // Blue for prices
  },
  removeButton: {
    backgroundColor: '#ff6b6b', // Red for remove button
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default WishlistScreen;
