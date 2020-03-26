import React, { useContext } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

//context
import { ThemeContext } from '~/context';

// theme
import theme from '~/theme';

const StyledText = ({ color, style, heading, ...rest }) => {
  const { activeTheme } = useContext(ThemeContext);

  const activeColor = theme.colors[activeTheme][color];

  return <Styled {...rest} style={[style]} activeTheme={activeTheme} color={activeColor} heading={heading} />;
};

const Styled = styled(Text)`
  color: ${({ color }) => color};
`;

StyledText.defaultProps = {
  color: 'text',
  handing: false,
};
export default StyledText;
