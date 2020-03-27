import React, { useContext } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import EStyleSheet from 'react-native-extended-stylesheet';

//context
import { ThemeContext } from '~/context';

// theme
import theme from '~/theme';

const StyledText = ({ size, color, style, heading, ...rest }) => {
  const { activeTheme } = useContext(ThemeContext);

  const styles = EStyleSheet.create({
    text: {
      fontSize: `${size}rem`,
      color: theme.colors[activeTheme][color],
    },
  });

  return <Styled {...rest} style={[style, styles.text]} activeTheme={activeTheme} color={color} heading={heading} />;
};

const Styled = styled(Text)``;

StyledText.defaultProps = {
  color: 'text',
  heading: false,
  size: 1.2,
};
export default StyledText;
