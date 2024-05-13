import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';
import {getDatabase, ref, set} from 'firebase/database';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const data = {
      username: username,
      email: email,
      password: password,
    };
    const db = getDatabase();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed up
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid), data);
        showMessage({
          message: 'registrasi berhasil silahkan login',
          type: 'success',
        });
        navigation.navigate('SignIn');
      })
      .catch(error => {
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signupText}>Sign Up</Text>
      <Text style={styles.instructionsText}>create your account</Text>

      <TextInput
        style={[styles.input, styles.usernameInputText]}
        placeholder="username"
        onChangeText={value => setUsername(value)}
        value={username}
      />
      <TextInput
        style={[styles.input, styles.passwordInput]}
        placeholder="email"
        onChangeText={value => setEmail(value)}
        value={email}
      />
      <TextInput
        style={[styles.input, styles.passwordInput]}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
        value={password}
      />
      <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
        <Text style={styles.buttonText}>CONFIRM</Text>
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
  usernameInputText: {
    marginTop: 55,
    fontSize: 15,
  },
  passwordInput: {
    marginBottom: 20,
    fontSize: 15,
  },
  loginButton: {
    backgroundColor: '#A6575E',
    borderRadius: 40,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    width: 350,
    height: 48,
    marginBottom: 86,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
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
