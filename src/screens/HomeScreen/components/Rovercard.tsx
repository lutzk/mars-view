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
      <View>
        <Text style={styles.cardHeader} testID="cardHeader">
          {manifest.name}
        </Text>
        <Text>
          landing date:
          <Text style={styles.value}>{manifest.landing_date}</Text>
        </Text>
        <Text>
          status: <Text style={styles.value}>{manifest.status}</Text>
        </Text>
        <Text>
          launch date: <Text style={styles.value}>{manifest.launch_date}</Text>
        </Text>
        <Text>
          max date: <Text style={styles.value}>{manifest.max_date}</Text>
        </Text>
        <Text>
          max sol: <Text style={styles.value}>{manifest.max_sol}</Text>
        </Text>
        <Text>
          total photos:
          <Text style={styles.value}>{manifest.total_photos}</Text>
        </Text>

        {manifest.wikiUrl && (
          // its checked above not sure why it complains
          <TouchableOpacity onPress={() => void openLink(manifest.wikiUrl!)}>
            <Text style={styles.link}>{manifest.name} on wikipedia</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export { RoverCard };
