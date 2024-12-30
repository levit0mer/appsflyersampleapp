import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SupportScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Need Help?</Text>
        <Text style={styles.subHeaderText}>We are here to assist you.</Text>
      </View>

      {/* FAQ Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        {[
          'How can I track my order?',
          'What is the return policy?',
          'How do I change my account settings?',
          'What payment methods do you accept?',
        ].map((faq, index) => (
          <TouchableOpacity key={index} style={styles.faqCard}>
            <Text style={styles.faqText}>{faq}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contact Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <View style={styles.contactCard}>
          <Text style={styles.contactText}>
            Have more questions? Feel free to reach out to our support team.
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact Support</Text>
          </TouchableOpacity>
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
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Black/Gray for header text
  },
  subHeaderText: {
    fontSize: 14,
    color: '#555', // Gray for subheader text
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
  faqCard: {
    backgroundColor: '#e3f2fd', // Light Blue for FAQ cards
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  faqText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff', // Blue for FAQ text
  },
  contactCard: {
    backgroundColor: '#fff', // White background for contact section
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  contactButton: {
    backgroundColor: '#007bff', // Blue for contact button
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SupportScreen;
