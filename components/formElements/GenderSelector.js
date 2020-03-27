import React, { useState, useContext } from 'react';
import { Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';

// component
import { Box, Text } from '~/components/common';

//context
import { ThemeContext } from '~/context';

// theme
import theme from '~/theme';

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
    title: 'LGBT',
    url:
      'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/rainbow-flag_1f3f3-fe0f-200d-1f308.png',
  },
];

const GenderBottomSheetContent = ({ selectedGender, selectGender }) => {
  return (
    <>
      <Box backgroundColor="text" backgroundColor="bottomSheetBackground" style={styles.top} />
      <StyledGenderBottomSheetContentContainer backgroundColor="bottomSheetBackground" style={styles.contentContainer}>
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
      </StyledGenderBottomSheetContentContainer>
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
  const [showModal, setShowModal] = useState(true);
  const [selectedGender, setSelectedGender] = useState({
    title: '',
    url: '',
    selected: false,
  });

  return (
    <TouchableWithoutFeedback onPress={() => setShowModal(!showModal)}>
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

        <Modal
          onBackdropPress={() => setShowModal(!showModal)}
          onSwipeComplete={() => setShowModal(!showModal)}
          isVisible={showModal}
          hideModalContentWhileAnimating
          style={{ margin: 0, justifyContent: 'flex-end' }}
        >
          <GenderBottomSheetContent selectedGender={selectedGender} selectGender={selectGender} />
        </Modal>
      </StyledGenderRender>
    </TouchableWithoutFeedback>
  );

  function selectGender(gender) {
    setSelectedGender({ ...gender, selected: true });
    setShowModal(false);
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

const StyledGenderBottomSheetContentContainer = styled(Box)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
    height: '17rem',
    padding: '1rem',
  },

  contentContainerHeader: {
    alignItems: 'center',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },

  top: {
    width: 50,
    height: 4,
    borderRadius: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '0.4rem',
  },

  gender: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '1.8rem',
  },
});

export default GenderSelector;
