// Author: Aditya Dhotre
// This file contains the main navigation drawer for the application.

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native';
import Home from './Home';
import ContactUs from './ContactUs';
import Login from './Login';
import AboutUs from './AboutUs';
import RecipeDetailPage from './RecipeDetailPage';
import RecipeExplorer from './RecipeExplorer';
import { useAuth } from './AuthContext';

const Drawer = createDrawerNavigator();

// Custom drawer content with logout button
const CustomDrawerContent = (props) => {
  const { isAuthenticated, logout } = useAuth();

  // Function to handle user logout
  const handleLogout = () => {
    logout();
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {isAuthenticated && (
        <View style={{ marginHorizontal: 16, marginTop: 10 }}>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      )}
    </DrawerContentScrollView>
  );
};

// Main drawer navigator
const DrawerNavigator = () => {
  const { isAuthenticated, logout } = useAuth();

  // Function to handle user logout
  const handleLogout = () => {
    logout();
  };

  return (
    <Drawer.Navigator initialRouteName="Home" >
      {/* Home screen */}
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      {/* Explore Recipe screen */}
      {isAuthenticated && (
        <Drawer.Screen
          name="Explore Recepie"
          component={RecipeExplorer}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food-variant" size={size} color={color} />
            ),
          }}
        />
      )}
      {/* About Us screen */}
      <Drawer.Screen
        name="About Us"
        component={AboutUs}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Contact Us"
        component={ContactUs}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="mail-outline" size={size} color={color} />
          ),
        }}
      />
      {/* Login screen if user is not authenticated */}
      {!isAuthenticated &&
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-in-outline" size={size} color={color} />
            ),
          }}
        />}
      {/* Logout button if user is authenticated */}
      {isAuthenticated && (
        <Drawer.Screen
          name="Logout"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-out-outline" size={size} color={color} />
            ),
          }}
          component={() => <Button title="Logout" onPress={handleLogout} />}
        />
      )}

      <Drawer.Screen
        name="Recepie"
        component={RecipeExplorer} // Replace with your desired component
        options={{ drawerLabel: () => null }} // Hide the label in the drawer
      />
    </Drawer.Navigator>

  );
};

export default DrawerNavigator;
