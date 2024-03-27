// Author: Aditya Dhotre

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

// Defining the AboutUs component
const AboutUs = () => {
  return (
    <View style={styles.container}>
      {/* Section Header */}
      <View style={styles.header}>
        <Text style={styles.name}> Join the journey of our remarkable team. Feel our unity as you adjust your browser window.</Text>
      </View>

      {/* Section for Team Introduction */}
      <Text style={styles.teamHeader}>Get to Know Our Remarkable Team</Text>

      {/* ScrollView for enabling scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          {/* Profile of James */}
          <View style={styles.card}>
            <Image
              source={require('../assets/James.jpg')}
              style={{ width: 460, height: 200 }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>James Anderson</Text>
              <Text style={styles.role}>CEO & Founder</Text>
              <Text>Drives the team with innovation, integrity, and strategic vision, shaping industry standards.</Text>
              <Text>james@recipefinder.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>

          {/* Profile of Emily */}
          <View style={styles.card}>
            <Image
              source={require('../assets/Emily.jpg')}
              style={{ width: 460, height: 200 }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Emily Parker</Text>
              <Text style={styles.role}>Art Director</Text>
              <Text>Designs visual stories with precision and creativity, engaging audiences.</Text>
              <Text>emily@recipefinder.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>

          {/* Profile of Benjamin */}
          <View style={styles.card}>
            <Image
              source={require('../assets/benjamin.jpg')}
              style={{ width: 460, height: 200 }}
            />
            <View style={styles.cardContent}>
              <Text style={styles.name}>Benjamin Hughes</Text>
              <Text style={styles.role}>Designer</Text>
              <Text>Combines aesthetics and functionality to create visually pleasing solutions.</Text>
              <Text>benjamin@recipefinder.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Defining Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4d63d1',
    padding: 20,
    alignItems: 'center',
  },
  teamHeader: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexDirection: 'column', // Items are displayed vertically
    alignItems: 'center', // Items are centered horizontally
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '80%', // Width can be adjusted as per your preference
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  role: {
    textAlign: 'center',
    fontWeight: '500'
  },
});

export default AboutUs;
