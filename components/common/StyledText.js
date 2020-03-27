import React, { useContext } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import EStyleSheet from 'react-native-extended-stylesheet';

//context
import { ThemeContext } from '~/context';

// theme
import theme from '~/theme';

const StyledText = ({ fontFamily, size, color, style, ...rest }) => {
  const { activeTheme } = useContext(ThemeContext);

  const styles = EStyleSheet.create({
    text: {
      fontSize: `${size}rem`,
      color: theme.colors[activeTheme][color],
    },
  });

  return (
    <Styled {...rest} fontFamily={fontFamily} style={[style, styles.text]} activeTheme={activeTheme} color={color} />
  );
};

const Styled = styled(Text)`
  font-family: ${({ fontFamily }) => fontFamily};
  border: 1px solid red;
`;

StyledText.defaultProps = {
  color: 'text',
  fontFamily: 'Inter',
  size: 1,
};
export default StyledText;
