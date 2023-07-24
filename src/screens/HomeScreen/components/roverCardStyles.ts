import { Colors } from '@styleguide/Colors';
import { FontStyles } from '@styleguide/FontStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderColor: '#f78705',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
    backgroundColor: Colors.cardBGColor,
  },
  cardHeader: {
    ...FontStyles.SubHeadline,
  },
  label: {},
  value: {},
});

export { styles };
