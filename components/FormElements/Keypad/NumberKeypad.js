import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// utils
import { VIRTUAL_NUMBER_KEYBOARD_KEYMAP } from './VirtualNumberKeypad';

const KeypadContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const KeyBox = styled(TouchableOpacity)`
  flex-basis: 33.333333%;
  height: 90px;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 2px solid red;
`;

const Key = ({ children, onTap }) => {
  return (
    <KeyBox onPress={onTap} activeOpacity={0.3}>
      {children}
    </KeyBox>
  );
};

Key.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onTap: PropTypes.func.isRequired,
};

const Keys = ({ onTapKey }) => {
  const byPosition = (one, other) => one.position - other.position;
  const keys = Object.values(VIRTUAL_NUMBER_KEYBOARD_KEYMAP)
    .sort(byPosition)
    .map(item => {
      return (
        <Key
          key={item.value}
          onTap={() => {
            onTapKey(item);
          }}
        >
          <item.component />
        </Key>
      );
    });

  return keys;
};

const VirtualNumberKeypad = ({ onTapKey }) => {
  return (
    <View>
      <KeypadContainer>
        <Keys onTapKey={onTapKey} />
      </KeypadContainer>
    </View>
  );
};

VirtualNumberKeypad.propTypes = {
  onTapKey: PropTypes.func,
};

VirtualNumberKeypad.defaultProps = {
  onTapKey: key => {},
};

export default VirtualNumberKeypad;
