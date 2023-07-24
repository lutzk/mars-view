import * as React from 'react';
import { Text, View } from 'react-native';

import strings from '@strings/strings.json';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  RoverNames,
  fetchRoverManifestByName,
} from '@store/features/rovers/roverSlice';
import { RoverCard } from './components/Rovercard';

import { styles } from './homeScreenStyles';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    void Promise.all([
      void dispatch(fetchRoverManifestByName(RoverNames.Spirit)),
      void dispatch(fetchRoverManifestByName(RoverNames.Opportunity)),
      void dispatch(fetchRoverManifestByName(RoverNames.Curiosity)),
    ]);
  }, []);

  const spirit = useAppSelector(state => state.rovers.roversManifests.spirit);
  const opportunity = useAppSelector(
    state => state.rovers.roversManifests.opportunity,
  );
  const curiosity = useAppSelector(
    state => state.rovers.roversManifests.curiosity,
  );

  return (
    <View style={styles.container}>
      <Text>{strings.home.headline}</Text>
      {spirit && <RoverCard manifest={spirit} />}
      {opportunity && <RoverCard manifest={opportunity} />}
      {curiosity && <RoverCard manifest={curiosity} />}
      {/* remove the line and json import breaks WTF xD - use i18n */}
      <Text></Text>
    </View>
  );
};

export { HomeScreen };
