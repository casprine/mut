import React, { useContext } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

//context
import { ThemeContext } from '~/context';

const Box = ({ backgroundColor, children, ...rest }) => {
  const { activeTheme } = useContext(ThemeContext);

  return (
    <StyledBox backgroundColor={backgroundColor} activeTheme={activeTheme} {...rest}>
      {children}
    </StyledBox>
  );
};

const StyledBox = styled(View)`
  background-color: ${({ theme, backgroundColor, activeTheme }) => theme.colors[activeTheme][backgroundColor]};
`;

Box.defaultProps = {
  backgroundColor: 'background',
};

Box.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Box;
