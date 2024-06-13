import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>

      <View style={styles.greetingContainer}>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Welcome back</Text>
          <Image source={require('./assets/wave.png')} style={styles.wave} />
        </View>
        <Text style={styles.subGreeting}>Let's log in.Apply to jobs!</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
        <Image source={require('./assets/apple.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        <Image source={require('./assets/google.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
        <Image source={require('./assets/facebook.png')} style={styles.logo} />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'left',
    width: '100%',
  },
  greetingContainer: {
    alignItems: 'flex-start',
    marginBottom: 40,
    width: '100%',
  },
  greeting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 24,
    color: '#333',
  },
  wave: {
    marginLeft: 5,
    width: 20,
    height: 20,
  },
  subGreeting: {
    fontSize: 18,
    color: '#666',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
    textAlign: 'left',
  },
  loginButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#D52',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
});
