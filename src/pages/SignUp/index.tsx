import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logika untuk proses login bisa ditambahkan di sini
    console.log('Login button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signupText}>Sign Up</Text>
      <Text style={styles.instructionsText}>create your account</Text>

      <TextInput
        placeholder="username"
        textAlign="center"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="email"
        textAlign="center"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        placeholder="Password"
        textAlign="center"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        placeholder="confirm password"
        textAlign="center"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Homepage')}>
        <Text style={styles.buttonText}>CONFIRM</Text>
      </TouchableOpacity>

      <Text style={styles.noAccountText}>already have any account?</Text>
      <TouchableOpacity
        style={styles.loginButton2}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText2}>LOGIN</Text>
      </TouchableOpacity>
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
  signupText: {
    marginTop: 90,
    marginBottom: -10,
    fontSize: 35,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  instructionsText: {
    height: 20,
    color: '#969292',
    fontSize: 15,
    marginBottom: 10,
  },
  loginButton2: {
    backgroundColor: '#704145',
    borderRadius: 40,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    width: 350,
    height: 48,
    marginBottom: 86,
    marginTop: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  buttonText2: {
    color: '#eee',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  noAccountText: {
    fontSize: 16,
    marginTop: -20,
    marginBottom: -20,
    fontFamily: 'Poppins-Regular',
  },
});

export default SignUp;
