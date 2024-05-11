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
      <Text> Sign Up</Text>
      <Text>create your account</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Homepage')}>
        <Text>CONFIRM</Text>
      </TouchableOpacity>

      <Text>already have any account?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignIn')}>
        <Text>LOGIN</Text>
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
  buttonText2: {
    color: '#eee',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
});

export default SignUp;