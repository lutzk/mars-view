import * as React from 'react';
import { Text, View } from 'react-native';

import strings from '@strings/strings.json';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>{strings.home.headline}</Text>

      {/* remove the line and json import breaks WTF xD */}
      <Text></Text>
    </View>
  );
};

export { HomeScreen };
