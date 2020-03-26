import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Box = ({ backgroundColor, children, ...rest }) => {
  return (
    <StyledBox backgroundColor={backgroundColor} {...rest}>
      {children}
    </StyledBox>
  );
};

const StyledBox = styled(View)`
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
`;

Box.defaultProps = {
  backgroundColor: 'white',
};

Box.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Box;
