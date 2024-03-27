// Author: Aditya Dhotre
// This file contains the RecipeDetailPage component for the application.

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// RecipeDetailPage component
const RecipeDetailPage = ({ recipe }) => {

  // If the recipe data is not available, display a loading message
  if (!recipe) {
    return <Text>Loading...</Text>; // or any other loading indicator
  }

  // Render the recipe details
  return (
    <View style={styles.container}>
      {/* Display the recipe title */}
      <Text style={styles.title}>{recipe.label}</Text>
      {/* Display the recipe image */}
      <Image
        source={{ uri: recipe.image }}
        style={styles.image}
      />
      {/* Display the source of the recipe */}
      <Text style={styles.source}>Source: {recipe.source}</Text>
      {/* Display the ingredients title */}
      <Text style={styles.ingredientsTitle}>Ingredients:</Text>
      {/* Check if ingredients exist before mapping over them */}
      {recipe.ingredients && recipe.ingredients.length > 0 ? (
        <View style={styles.ingredientsContainer}>
          {/* Map over the ingredients and display each one */}
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>{ingredient.text}</Text>
          ))}
        </View>
      ) : (
        // If no ingredients are found, display a message
        <Text>No ingredients found</Text>
      )}
    </View>
  );
};

// Styles for the RecipeDetailPage component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#4d63d1',
    paddingVertical: 20,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  source: {
    textAlign: 'center',
    marginBottom: 10,
  },
  ingredientsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  ingredientsContainer: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  ingredient: {
    marginBottom: 5,
  },
});

// Exporting the RecipeDetailPage component
export default RecipeDetailPage;
