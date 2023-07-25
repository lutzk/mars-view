import { Colors } from './Colors';

const Headline = {
  fontSize: 24,
  fontWeight: 'bold',
  color: Colors.darkGrey,
} as const;

const SubHeadline = {
  fontSize: 20,
  fontWeight: 'normal',
  color: Colors.darkGrey,
} as const;

const Text = {
  fontSize: 16,
  fontWeight: 'normal',
  color: Colors.darkGrey,
} as const;

const TextBold = {
  ...Text,
  fontWeight: 'bold',
} as const;

const LinkText = {
  ...Text,
  color: Colors.appMain,
  textDecorationLine: 'underline',
  textDecorationColor: Colors.appMain,
} as const;

const FontStyles = {
  Headline,
  SubHeadline,

  Text,
  TextBold,
  LinkText,
};

export { FontStyles };
