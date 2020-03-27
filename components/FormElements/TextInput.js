import React, { useState, useContext } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

// theme
import theme from '~/theme';

//context
import { ThemeContext } from '~/context';

const Input = React.forwardRef((props, ref) => {
  const { styleOverride, onChange, disabled, placeholderText, value, name, onFocus, ...rest } = props;
  const [hasFocus, setHasFocus] = useState(false);
  const editable = !disabled;
  const { activeTheme } = useContext(ThemeContext);

  return (
    <StyledInput
      ref={ref}
      placeholder={placeholderText}
      disabled={disabled}
      editable={editable}
      focus={hasFocus}
      value={value}
      activeTheme={activeTheme}
      onChangeText={text => onChange(name, text)}
      placeholderTextColor={disabled ? theme.colors.greyLighter2x : theme.colors[activeTheme].gray}
      name={name}
      style={{ ...styleOverride }}
      onFocus={() => {
        setHasFocus(true);
        onFocus(true);
      }}
      onBlur={() => {
        setHasFocus(false);
        onFocus(false);
      }}
      {...rest}
    />
  );
});

Input.propTypes = {
  styleOverride: PropTypes.shape({}),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  placeholderText: PropTypes.string,
  onFocus: PropTypes.func,
  name: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  placeholderText: '0547377700',
  name: 'text-input',
  styleOverride: {},
  onFocus: () => {},
};

const StyledInput = styled(TextInput)`
  height: 55px;
  font-size: 17px;
  border-radius: 5px;
  padding: 0 20px;
  align-self: stretch;
  font-family: 'Firma';
  color: ${({ theme, activeTheme }) => theme.colors[activeTheme].text};
  border: 2px solid
    ${({ theme, focus, activeTheme }) => {
      if (focus) {
        return theme.colors[activeTheme].greenPrimary;
      } else {
        return theme.colors[activeTheme].text;
      }
    }};
`;

export default Input;

/**
 * onChange : function
 * onFocus : function
 * disabled : boolean
 * styleOverride : style object
 * value : string
 * placeholderText: keyof themeObject
 * name : string
 */
