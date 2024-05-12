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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eaa',
    borderRadius: 40,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    height: 48,
    width: 350,
    marginBottom: 20,
    paddingLeft: 40,
  },
  welcomeText: {
    marginTop: 60,
    marginBottom: -10,
    fontSize: 35,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  instructionsText: {
    height: 20,
    color: '#969292',
    fontSize: 15,
    marginBottom: 60,
  },
  usernameInputText: {
    marginTop: 55,
    fontSize: 15,
  },
  passwordInput: {
    marginBottom: 20,
    fontSize: 15,
  },
});

export default SignIn;