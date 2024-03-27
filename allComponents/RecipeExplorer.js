// Author: Aditya Dhotre
// This file contains the RecipeExplorer component for the application.

import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, Button, ScrollView, Image, StyleSheet } from 'react-native';
import RecipeDetailPage from './RecipeDetailPage';

// RecipeExplorer component
const RecipeExplorer = () => {
  // State variables for storing the search query, recipes, and selected recipe
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Constants for the API credentials
  const APP_ID_ = '0d747d19';
  const APP_KEY_ = '067b3d95722ee33e3c68676b2f8bdaf3';

  // Function to handle the recipe search
  const handleSearch = async () => {
    try {
      // Making a GET request to the API
      const response = await axios.get(`https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID_}&app_key=${APP_KEY_}`);
      // Setting the recipes state variable with the data from the response
      setRecipes(response.data.hits);
    } catch (error) {
      // Logging the error if the request fails
      console.error('Error fetching recipes:', error);
    }
  };

  // Function to handle viewing the details of a recipe
  const handleViewDetails = (recipe) => {
    // Setting the selected recipe state variable with the selected recipe
    setSelectedRecipe(recipe.recipe);
  };

  // Function to handle going back to the recipe explorer
  const handleGoBack = () => {
    // Setting the selected recipe state variable to null
    setSelectedRecipe(null);
  };

  // Rendering the RecipeExplorer component
  return (
    <View style={styles.container}>
      {/* Section for the search input and button */}
      {!selectedRecipe && (
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for recipes"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            style={styles.input}
          />
          <Button title="Search" onPress={handleSearch} />
        </View>
      )}

      {/* Section for displaying the recipe cards or the recipe detail page */}
      {selectedRecipe ? (
        <RecipeDetailPage recipe={selectedRecipe} onGoBack={handleGoBack} />
      ) : (
        <ScrollView contentContainerStyle={styles.cardContainer}>
          {recipes.map(recipe => (
            <View key={recipe.recipe.uri} style={styles.card}>
              <Image
                source={{ uri: recipe.recipe.image }}
                style={styles.image}
              />
              <Text style={styles.title}>{recipe.recipe.label}</Text>
              <Text style={styles.source}>{recipe.recipe.source}</Text>
              <Button title="View Details" onPress={() => handleViewDetails(recipe)} />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

// Styles for the RecipeExplorer component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 240,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  source: {
    textAlign: 'center',
    marginBottom: 10,
  },
});

// Exporting the RecipeExplorer component
export default RecipeExplorer;
