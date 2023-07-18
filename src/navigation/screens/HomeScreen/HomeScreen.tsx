import * as React from 'react';
import { Text, View } from 'react-native';

import strings from '../../../strings/strings.json';

const HomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>{strings.home.headline}</Text>
    </View>
  );
};

export { HomeScreen };
