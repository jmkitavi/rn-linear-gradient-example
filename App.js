import React from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>

        <LinearGradient
          colors={['red', 'yellow', 'green' ]}
          style={styles.linearGradient}
        >
          <Text>Vertical Gradient</Text>
        </LinearGradient>


        <LinearGradient
          colors={['red', 'yellow', 'green' ]}
          style={styles.linearGradient}
          start={{ x: 0.7, y: 0 }}
        >
          <Text>Diagonal Gradient</Text>
        </LinearGradient>

        <LinearGradient
          colors={['red', 'yellow', 'green' ]}
          style={styles.linearGradient}
          start={{ x: 0.5, y: 0.5 }}
        >
          <Text>Vertical Gradient</Text>
        </LinearGradient>

        <LinearGradient
          colors={['red', 'yellow', 'green' ]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text>Horizontal Gradient</Text>
        </LinearGradient>

        <LinearGradient
          colors={['red', 'yellow', 'green' ]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text>Diagonal Gradient</Text>
        </LinearGradient>

        <LinearGradient
          colors={['red', 'yellow', 'green' ]}
          style={styles.linearGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          locations={[0, 0.7, 0.9]}
        >
          <Text>H. Location Gradient</Text>
        </LinearGradient>

        <LinearGradient
          colors={['red', 'yellow', 'green' ]}
          style={styles.linearGradient}
          locations={[0, 0.3, 0.9]}
        >
          <Text>V. Location Gradient</Text>
        </LinearGradient>
        
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
    marginVertical: 100,
  },
})

export default App