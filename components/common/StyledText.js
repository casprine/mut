import React, { useContext } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

//context
import { ThemeContext } from '~/context';

const StyledText = ({ color, style, heading, ...rest }) => {
  const { activeTheme } = useContext(ThemeContext);

  return <Styled {...rest} style={[style]} activeTheme={activeTheme} color={color} heading={heading} />;
};

const Styled = styled(Text)`
  color: ${({ color, theme, activeTheme }) => theme.colors[activeTheme][color]};
`;

StyledText.defaultProps = {
  color: 'text',
  heading: false,
};
export default StyledText;
