import React, { useState, useContext, createRef } from 'react';
import { Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';

// component
import { Box, Text, BottomSheet } from '~/components/common';

//context
import { ThemeContext } from '~/context';

// theme
import theme from '~/theme';

const refRBSheet = createRef();

const genderList = [
  {
    title: 'Male',
    url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/man_1f468.png',
  },
  {
    title: 'Female',
    url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/woman_1f469.png',
  },

  {
    title: 'Other',
    url:
      'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/rainbow-flag_1f3f3-fe0f-200d-1f308.png',
  },
];

const GenderBottomSheetContent = ({ selectedGender, selectGender }) => {
  return (
    <>
      <Box backgroundColor="bottomSheetBackground" style={styles.contentContainerHeader}>
        <Text heading size={1.4}>
          Select your gender
        </Text>
      </Box>

      <Box backgroundColor="bottomSheetBackground">
        {genderList.map((gender, index) => {
          return <Gender selectGender={selectGender} selectedGender={selectedGender} {...gender} key={index} />;
        })}
      </Box>
    </>
  );
};

const Gender = ({ title, url, selectedGender, selectGender }) => {
  const { activeTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => selectGender({ title, url })}>
      <StyledGender backgroundColor="bottomSheetBackground" style={styles.gender}>
        {selectedGender.title === title && (
          <Ionicons name="md-checkbox-outline" size={17} color={theme.colors[activeTheme].text} />
        )}
        {selectedGender.title !== title && (
          <Ionicons name="md-square-outline" size={17} color={theme.colors[activeTheme].text} />
        )}
        <Text size={1.3} style={{ fontFamily: 'Inter', marginLeft: 10 }}>
          {title}
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        />
      </StyledGender>
    </TouchableOpacity>
  );
};

const GenderSelector = () => {
  const { activeTheme } = useContext(ThemeContext);
  const [selectedGender, setSelectedGender] = useState({
    title: '',
    url: '',
    selected: false,
  });

  return (
    <>
      <TouchableWithoutFeedback onPress={() => refRBSheet.current.open()}>
        <StyledGenderRender activeTheme={activeTheme}>
          {selectedGender.selected && (
            <>
              <Text style={{ fontFamily: 'Inter' }}> {selectedGender.title} </Text>
              <Image
                style={styles.image}
                source={{
                  uri: selectedGender.url,
                }}
              />
            </>
          )}
          {!selectedGender.selected && <Text color="gray">Gender</Text>}
        </StyledGenderRender>
      </TouchableWithoutFeedback>
      <BottomSheet ref={refRBSheet} height={300}>
        <GenderBottomSheetContent selectedGender={selectedGender} selectGender={selectGender} />
      </BottomSheet>
    </>
  );

  function selectGender(gender) {
    setSelectedGender({ ...gender, selected: true });
  }
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

const StyledGender = styled(Box)`
  align-items: center;
  flex-direction: row;
`;
const styles = EStyleSheet.create({
  container: {},

  header: {
    width: '100%',
    height: 50,
  },
  image: {
    marginLeft: 'auto',
    width: 17,
    height: 17,
  },
  contentContainer: {
    height: '100%',
    padding: '1rem',
  },

  contentContainerHeader: {
    alignItems: 'center',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },

  gender: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '1.8rem',
  },
});

export default GenderSelector;
