import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text,
  View, 
  Image, 
  TextInput, 
  Pressable
} from 'react-native';

const logoImage = require('./assets/icons/tree-cycle-logo-mark.jpg')

const App = () => {

  return (
    // The outermost View.
    <View style={styles.container}>

      {/* View containing logo. */}
      <View style={styles.logo}>
        <Image source={logoImage} style={{marginTop: 100}}/>
      </View>

      {/* View containing username and password fields. */}
      <View style={styles.fields}>

        <TextInput placeholder='username' style={styles.inputField}/>
        <TextInput placeholder='password' style={styles.inputField} secureTextEntry={true}/>

      </View>

      {/* View containing login and register buttons. */}
      <View style={styles.buttonView}>

        <Pressable style={styles.buttonContainer} onPress={()=>{alert("Logged in")}}>
          <Text style={styles.buttonLabel}>Login</Text>
        </Pressable>

        <Pressable style={styles.buttonContainer} onPress={()=>{alert("Registered")}}>
          <Text style={styles.buttonLabel}>Register</Text>
        </Pressable>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// Contains styles for views.
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    flex: 0.30,
    backgroundColor:"white",
    justifyContent: 'center',
    alignItems: 'center'
  },

  fields: {
    flex: 0.50,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputField: {
    fontSize: 20,

    width: 200,
    height: 40,
    margin: 8,

    textAlign: 'center'
  },

  buttonView: {
    flex: 0.20,
    flexDirection: 'column',

  },

  buttonContainer: {
    width: 240,
    height: 50,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,
    margin: 4,

    backgroundColor: "black",
  },

  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;