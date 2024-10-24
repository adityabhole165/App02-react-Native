import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native'

function App(){
  return(<SafeAreaView>
    <View>
    <Text style={styles.text}>Hello World</Text>
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.text}>Hello World</Text>
    </View>
 </SafeAreaView> )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;