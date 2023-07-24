import { Colors } from './Colors';

const Headline = {
  fontSize: 24,
  fontWeight: 'bold',
  color: Colors.textColor,
} as const;

const SubHeadline = {
  fontSize: 20,
  fontWeight: 'bold',
  color: Colors.textColor,
} as const;

const Text = {
  fontSize: 16,
  fontWeight: 'bold',
  color: Colors.textColor,
} as const;

const FontStyles = {
  Headline,
  SubHeadline,
  Text,
};

export { FontStyles };
