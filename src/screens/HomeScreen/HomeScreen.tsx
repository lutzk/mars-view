import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  RoverNames,
  fetchRoverManifestByName,
} from '@store/features/rovers/roverSlice';
import { RoverCard } from './components/Rovercard';

import { styles } from './homeScreenStyles';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const { t } = useTranslation();
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text>{t('home.headline')}</Text>
      {spirit && <RoverCard manifest={spirit} />}
      {opportunity && <RoverCard manifest={opportunity} />}
      {curiosity && <RoverCard manifest={curiosity} />}
    </ScrollView>
  );
};

export { HomeScreen };
