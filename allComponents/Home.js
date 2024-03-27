// Author: Aditya Dhotre

import React from 'react';
import { View, Text } from 'react-native';

const Home = ({ theme }) => {
  // Define key features of the Recipe Finder
  const keyFeatures = [
    'Personalized Recommendations',
    'Advanced Search Functionality',
    'Customizable Dietary Preferences',
    'Interactive Cooking Assistance',
  ];

  // Define styles based on the selected theme
  const styles = {
    light: {
      textColor: '#000000',
      headerColor: '#4d63d1',
    }
  };

  // Apply the selected theme or default to light theme
  const selectedStyles = styles[theme] || styles.light;

  return (
    <>
      {/* Render the header section */}
      <View style={{ backgroundColor: selectedStyles.headerColor, paddingVertical: 20, alignItems: 'center' }}>
        <Text style={{ color: selectedStyles.textColor, fontSize: 20, fontWeight: 'bold' }}>Welcome to the Recipe Finder!</Text>
      </View>
      {/* Render the main content */}
      <View style={{ paddingHorizontal: 20, paddingTop: 20, alignItems: 'center' }}>
        {/* Introduction */}
        <Text style={{ color: selectedStyles.textColor, fontSize: 16 }}>
          The Recipe Finder revolutionizes recipe discovery and exploration through innovative features.
          Unlike traditional recipe platforms, it employs advanced algorithms to provide personalized recipe suggestions tailored to individual tastes, dietary preferences, and cooking habits.
        </Text>
        <Text style={{ color: selectedStyles.textColor, fontSize: 18, fontWeight: 'bold' }}>Key Features:</Text>
        {/* Render the key features section */}
        <View style={{ marginTop: 10, borderWidth: 1, borderColor: selectedStyles.headerColor, borderRadius: 5 }}>
          {keyFeatures.map((feature, index) => (
            <View key={index} style={{ flexDirection: 'row', marginBottom: 5, paddingHorizontal: 10, paddingVertical: 5 }}>
              <Text style={{ color: selectedStyles.textColor, fontSize: 16 }}>{feature}</Text>
            </View>
          ))}
        </View>
        {/* Render the call to action */}
        <Text style={{ color: selectedStyles.textColor, fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Explore Now:</Text>
        <Text style={{ color: selectedStyles.textColor, fontSize: 16 }}>Start exploring our features</Text>
      </View>
    </>
  );
};

export default Home;
