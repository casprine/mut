import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

//context
import { ThemeContext } from '~/context';

const Button = ({ onPress, disabled, styleOverride, children, activeOpacity, width, height }) => {
  const { activeTheme } = useContext(ThemeContext);

  return (
    <StyledButton
      activeOpacity={activeOpacity}
      style={{ ...styleOverride }}
      onPress={onPress}
      width={width}
      height={height}
      disabled={disabled}
      activeTheme={activeTheme}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  styleOverride: PropTypes.shape({}),
  disabled: PropTypes.bool,
  activeOpacity: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Button.defaultProps = {
  activeOpacity: 0.5,
  onPress: () => {},
};

const StyledButton = styled(TouchableOpacity)`
  height: 55px;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-color: ${({ theme, activeTheme }) => theme.colors[activeTheme].buttonBackground};
`;

export default Button;
