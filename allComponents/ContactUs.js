// Author: Aditya Dhotre

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ConnectWithUs = () => { 
  const [userName, setUserName] = useState(''); 
  const [userResponse, setUserResponse] = useState(''); 

  const submitForm = () => { 
    setUserResponse('You will receive a response shortly.'); 
    // Logic to handle form submission goes here
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ backgroundColor: '#4d63d1', padding: 20 ,alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Get In Touch</Text> 
        <Text style={{color: 'black', fontSize: 20 }}> Have any queries or issues? Don't hesitate to contact us. Our team is here to assist you.</Text> 
      </View>
      <View style={{ marginVertical: 20 }}>
        <TextInput
          placeholder="Your Name"
          value={userName} 
          onChangeText={(text) => setUserName(text)} 
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Your Email"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Subject"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <TextInput
          placeholder="Your Message"
          multiline
          numberOfLines={4}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
        <Button title="Send" onPress={submitForm} style={{ backgroundColor: '#4d63d1'}}/> 
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>{userResponse}</Text> 
      </View>
    </View>
  );
};

export default ConnectWithUs;
