import * as React from 'react';
import { Text, View } from 'react-native';

import strings from '@strings/strings.json';
import { useAppDispatch } from '@store/hooks';
import {
  RoverNames,
  fetchRoverManifestByName,
} from '@store/features/rovers/roverSlice';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchRoverManifestByName(RoverNames.Spirit)).then(r =>
      console.tron.log?.(r.payload),
    );
  });
  fetchRoverManifestByName(RoverNames.Spirit);

  return (
    <View style={{ flex: 2 }}>
      <Text>{strings.home.headline}</Text>

      {/* remove the line and json import breaks WTF xD */}
      <Text></Text>
    </View>
  );
};

export { HomeScreen };
