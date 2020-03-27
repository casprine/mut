import React, { useContext } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import EStyleSheet from 'react-native-extended-stylesheet';

//context
import { ThemeContext } from '~/context';

// theme
import theme from '~/theme';

const StyledText = ({ inverse, heading, size, color, style, ...rest }) => {
  const { activeTheme } = useContext(ThemeContext);

  const styles = EStyleSheet.create({
    text: {
      fontSize: `${size}rem`,
      color: theme.colors[activeTheme][color],
    },
  });

  return <Styled {...rest} style={[style, styles.text]} activeTheme={activeTheme} color={color} heading={heading} />;
};

const Styled = styled(Text)`
  font-family: ${({ heading }) => (heading ? 'Larsseit' : 'Circular')};
  /* border: 1px solid red; */
`;

StyledText.defaultProps = {
  color: 'text',
  heading: false,
  size: 1,
  inverse: false,
};
export default StyledText;
