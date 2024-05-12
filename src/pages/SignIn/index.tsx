import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logika untuk proses login bisa ditambahkan di sini
    console.log('Login button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <Text style={styles.instructionsText}>
        enter your credentials to login
      </Text>

      <TextInput
        style={[styles.input, styles.usernameInputText]}
        placeholder=""
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={[styles.input, styles.passwordInput]}
        placeholder=""
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignIn;