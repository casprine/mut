import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled from 'styled-components/native';

// components
import { Text } from '~/components/common';

//context
import { ThemeContext } from '~/context';

const VerificationCodeDisplay = ({
  value,
  count,
  containerStyleOverride,
  textStyleOverride,
  textStyledContainerStyleOverride,
}) => {
  const { activeTheme } = useContext(ThemeContext);

  let splitValue = value.split('');

  if (splitValue.length === 0) {
    splitValue = Array(count)
      .join('.')
      .split('.');
  } else if (value.length < count) {
    const remainingValuesCount = count - value.length;
    const remainingValues = Array(remainingValuesCount)
      .join('.')
      .split('.');

    splitValue = [...splitValue, ...remainingValues];
  }

  return (
    <StyledCodeDisplayContainer style={{ ...containerStyleOverride }}>
      {splitValue.map((v, index) => {
        return (
          <StyledCode key={index} style={{ ...textStyledContainerStyleOverride }} activeTheme={activeTheme}>
            <Text size={1.563} style={{ ...textStyleOverride }}>
              {v}
            </Text>
          </StyledCode>
        );
      })}
    </StyledCodeDisplayContainer>
  );
};

VerificationCodeDisplay.propTypes = {
  value: PropTypes.string.isRequired,
  count: PropTypes.number,
  failed: PropTypes.bool,
  containerStyleOverride: PropTypes.shape({}),
  textStyleOverride: PropTypes.shape({}),
  textStyledContainerStyleOverride: PropTypes.shape({}),
};

VerificationCodeDisplay.defaultProps = {
  count: 4,
  failed: false,
  containerStyleOverride: {},
  textStyledContainerStyleOverride: {},
  textStyleOverride: {},
};

const StyledCode = styled(View)`
  width: 55px;
  height: 55px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin: 10px 5px;
  background-color: ${({ theme, activeTheme }) => theme.colors[activeTheme].box};
`;

const StyledCodeDisplayContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default VerificationCodeDisplay;
