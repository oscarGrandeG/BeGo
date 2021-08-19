import * as React from 'react';

import {View, StyleSheet} from 'react-native';

export default function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'rgba(16, 22, 28, 0.9)',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginBottom: 0,
    borderColor: 'rgba(16, 22, 28, 0.9)',
    shadowColor: '#1C232A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
