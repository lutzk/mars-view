import { Colors } from '@styleguide/Colors';
import { FontStyles } from '@styleguide/FontStyles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexGrow: 1,
    borderColor: Colors.appMain,
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
    backgroundColor: Colors.lightRed,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexShrink: 0,
  },
  cardHeader: {
    ...FontStyles.SubHeadline,
    color: Colors.appMain,
  },
  link: {
    ...FontStyles.LinkText,
  },
  label: {},
  value: {
    ...FontStyles.TextBold,
  },
});

export { styles };
