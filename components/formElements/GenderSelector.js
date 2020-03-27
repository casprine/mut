import React, { useState, useContext } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';
import EStyleSheet from 'react-native-extended-stylesheet';
import BottomSheet from 'reanimated-bottom-sheet';

// component
import { Box, Text } from '~/components/common';

//context
import { ThemeContext } from '~/context';

const GenderSelector = () => {
  const { activeTheme } = useContext(ThemeContext);
  const [selectedGender, setSelectedGender] = useState({
    name: '',
    imageUrl: '',
    selected: false,
  });

  return (
    <StyledGenderRender activeTheme={activeTheme}>
      {selectedGender.selected && (
        <>
          <Text style={{ fontFamily: 'Inter' }}> {selectedGender.name} </Text>
          <Image
            style={styles.image}
            source={{
              uri: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/woman_1f469.png',
            }}
          />
        </>
      )}
      {!selectedGender.selected && <Text color="gray">Gender</Text>}
    </StyledGenderRender>
  );
};

const StyledGenderRender = styled(Box)`
  border: 2px solid ${({ activeTheme, theme }) => theme.colors[activeTheme].text};
  height: 55px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  font-size: 17px;
`;

const styles = EStyleSheet.create({
  container: {},

  image: {
    marginLeft: 'auto',
    width: 17,
    height: 17,
  },
});

export default GenderSelector;
