import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

class Home extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['purple', 'pink', 'white' ]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text>Home Screen</Text>

        <TouchableOpacity onPress={() => {}}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{x: 1, y: 1 }}
            colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']}
            style={styles.instagramButton}
            >
            <Text style={{ color: 'white' }}>
              Sign In With Instagram
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{x: 1, y: 1 }}
          colors={[ 'red', 'yellow', 'green' ]}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={styles.signUpButton}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </LinearGradient>

      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instagramButton: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 20
  },
  signUpButton: {
    margin: 1,
    width: 200,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
})

export default Home