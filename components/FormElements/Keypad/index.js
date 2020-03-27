import React, { useState } from 'react';
import VirtualNumberKeypad from './NumberKeypad';
import PropTypes from 'prop-types';

// utils
import { BackspaceKey } from './VirtualNumberKeypad';

const ManagedNumberKeypad = ({ onTapReturn, onValueChange, ...otherProps }) => {
  const [currentValue, setCurrentValue] = useState('');
  const actionHandlers = {
    onTapReturn,
    onValueChange,
  };

  return (
    <VirtualNumberKeypad
      onTapKey={key => {
        handleKeyPress(key, currentValue, setCurrentValue, otherProps, actionHandlers);
      }}
    />
  );

  function handleBackspace(currentValue, setCurrentValue, onValueChange) {
    if (currentValue.length) {
      const newValue = currentValue.slice(0, currentValue.length - 1);
      setCurrentValue(newValue);
      onValueChange({ key: BackspaceKey, newValue });
    }
  }

  function handleReturn(currentValue, onTapReturn) {
    onTapReturn(currentValue);
  }

  function handleKeyPress(key, currentValue, setCurrentValue, extraProps, actionHandlers) {
    const { onTapReturn, onValueChange } = actionHandlers;
    const { maxNumberOfDigits } = extraProps;
    if (key.type === 'number') {
      if (currentValue.length < maxNumberOfDigits) {
        const newValue = `${currentValue}${String(key.value)}`;
        setCurrentValue(newValue);
        onValueChange({ key, newValue });
      }
    } else {
      switch (key.name) {
        case 'Backspace':
          handleBackspace(currentValue, setCurrentValue, onValueChange);
          break;
        case 'Return':
          handleReturn(currentValue, onTapReturn);
          break;
        default:
          console.log('Unrecognized action key');
      }
    }
  }
};

ManagedNumberKeypad.propTypes = {
  maxNumberOfDigits: PropTypes.number,
  onTapReturn: PropTypes.func,
  onValueChange: PropTypes.func,
};

ManagedNumberKeypad.defaultProps = {
  maxNumberOfDigits: 4,
  onTapReturn: currentValue => {},
  onValueChange: ({ key, newValue }) => {},
};

export default ManagedNumberKeypad;
