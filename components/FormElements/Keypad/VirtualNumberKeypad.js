import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';

// components
import { Text } from '~/components/common';

// context
import { ThemeContext } from '~/context';

// theme
import theme from '~/theme';

export const KeypadText = props => {
  return <Text size={1.563} {...props} />;
};

export const OneKey = {
  type: 'number',
  position: 1,
  name: 'One',
  value: 1,
  component: () => {
    return <KeypadText>1</KeypadText>;
  },
};

export const TwoKey = {
  type: 'number',
  position: 2,
  name: 'Two',
  value: 2,
  component: () => {
    return <KeypadText>2</KeypadText>;
  },
};

export const ThreeKey = {
  type: 'number',
  position: 3,
  name: 'Three',
  value: 3,
  component: () => {
    return <KeypadText>3</KeypadText>;
  },
};

export const FourKey = {
  type: 'number',
  position: 4,
  name: 'Four',
  value: 4,
  component: () => {
    return <KeypadText>4</KeypadText>;
  },
};
export const FiveKey = {
  type: 'number',
  position: 5,
  name: 'Five',
  value: 5,
  component: () => {
    return <KeypadText>5</KeypadText>;
  },
};
export const SixKey = {
  type: 'number',
  position: 6,
  name: 'Six',
  value: 6,
  component: () => {
    return <KeypadText>6</KeypadText>;
  },
};
export const SevenKey = {
  type: 'number',
  position: 7,
  name: 'Seven',
  value: 7,
  component: () => {
    return <KeypadText>7</KeypadText>;
  },
};

export const EightKey = {
  type: 'number',
  position: 8,
  name: 'Eight',
  value: 8,
  component: () => {
    return <KeypadText>8</KeypadText>;
  },
};
export const NineKey = {
  type: 'number',
  position: 9,
  name: 'Nine',
  value: 9,
  component: () => {
    return <KeypadText>9</KeypadText>;
  },
};
export const BackspaceKey = {
  type: 'action',
  position: 10,
  name: 'Backspace',
  value: 'backspace',
  component: () => {
    const { activeTheme } = useContext(ThemeContext);
    return <Ionicons name="ios-backspace" size={30} color={theme.colors[activeTheme].text} />;
  },
};
export const ZeroKey = {
  type: 'number',
  position: 11,
  name: 'Zero',
  value: 0,
  component: () => {
    return <KeypadText>0</KeypadText>;
  },
};

export const ReturnKey = {
  type: 'action',
  position: 12,
  name: 'Return',
  value: 'return',
  component: () => {
    return (
      <KeypadText size={1.2} fontFamily="Firma" color="greenPrimary">
        Done
      </KeypadText>
    );
  },
};

export const VIRTUAL_NUMBER_KEYBOARD_KEYMAP = {
  1: OneKey,
  2: TwoKey,
  3: ThreeKey,
  4: FourKey,
  5: FiveKey,
  6: SixKey,
  7: SevenKey,
  8: EightKey,
  9: NineKey,
  0: ZeroKey,
  return: ReturnKey,
  backspace: BackspaceKey,
};
