// Author: Aditya Dhotre
// This file contains the Login component for the application.

import React, { useState } from 'react';
import { Image, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext';

// Login component
function Login() {
  // Accessing the login function from the authentication context
  const { login } = useAuth();
  // Accessing the navigation object from the navigation context
  const navigation = useNavigation();

  // State variables for storing the username and password
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('123');

  // Function to handle the login button press
  const handleLogin = () => {
    // Checking if the username and password fields are not empty
    if (username && password) {
      // Calling the login function from the authentication context
      login();
      // Navigating to the Recipe page after successful login
      navigation.navigate('Recepie');
    } else {
      // Alerting the user if the username or password field is empty
      alert('Please enter your username and password.');
    }
  };

  // Rendering the Login component
  return (
    <View style={{ flex: 1 }}>
      {/* Section for displaying the image */}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={{ uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' }}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        />
      </View>
      {/* Section for displaying the form */}
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        {/* Input field for the username */}
        <TextInput
          style={{ marginBottom: 20, borderWidth: 1, borderColor: '#000', padding: 10 }}
          placeholder="Enter your username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        {/* Input field for the password */}
        <TextInput
          style={{ marginBottom: 20, borderWidth: 1, borderColor: '#000', padding: 10 }}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {/* Login button */}
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

// Exporting the Login component
export default Login;
