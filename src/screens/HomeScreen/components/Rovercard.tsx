import * as React from 'react';
import { Text, View } from 'react-native';

import { RoverManifest } from '@api/roverApi';
import { FC } from 'react';

type RoverCardProps = { manifest: RoverManifest };
const RoverCard: FC<RoverCardProps> = ({ manifest }) => {
  return (
    <View style={{ flex: 1, borderColor: 'red', borderWidth: 1 }}>
      <Text>name: {manifest.name}</Text>
      <Text>landing date: {manifest.landing_date}</Text>
      <Text>status: {manifest.status}</Text>
      <Text>launch date: {manifest.launch_date}</Text>
      <Text>max date: {manifest.max_date}</Text>
      <Text>max sol: {manifest.max_sol}</Text>
      <Text>total photos: {manifest.total_photos}</Text>
    </View>
  );
};

export { RoverCard };
