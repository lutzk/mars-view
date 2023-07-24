import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { RoverManifest } from '@api/roverApi';
import { FC } from 'react';

import { styles } from './roverCardStyles';
import { openLink } from '@utils/inAppBrowser';

type RoverCardProps = { manifest: RoverManifest };
const RoverCard: FC<RoverCardProps> = ({ manifest }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardHeader}>{manifest.name}</Text>
      <Text>landing date: {manifest.landing_date}</Text>
      <Text>status: {manifest.status}</Text>
      <Text>launch date: {manifest.launch_date}</Text>
      <Text>max date: {manifest.max_date}</Text>
      <Text>max sol: {manifest.max_sol}</Text>
      <Text>total photos: {manifest.total_photos}</Text>
      {manifest.wikiUrl && (
        // its checked above not sure why it complains
        <TouchableOpacity onPress={() => void openLink(manifest.wikiUrl!)}>
          <Text>{manifest.name} on wikipedia</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export { RoverCard };
