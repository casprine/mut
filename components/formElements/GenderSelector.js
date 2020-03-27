import React, { useState, useContext } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';
import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal';

// component
import { Box, Text } from '~/components/common';

//context
import { ThemeContext } from '~/context';

const GenderBottomSheetContent = () => {
  return (
    <>
      <Box backgroundColor="text" backgroundColor="bottomSheetBackground" style={styles.top} />
      <StyledGenderBottomSheetContentContainer backgroundColor="bottomSheetBackground" style={styles.contentContainer}>
        <Box backgroundColor="bottomSheetBackground" style={styles.contentContainerHeader}>
          <Text heading size={1.4}>
            Select your gender
          </Text>
        </Box>
      </StyledGenderBottomSheetContentContainer>
    </>
  );
};

const StyledGenderBottomSheetContentContainer = styled(Box)`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const GenderSelector = () => {
  const { activeTheme } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(true);
  const [selectedGender, setSelectedGender] = useState({
    name: '',
    imageUrl: '',
    selected: false,
  });

  return (
    <TouchableWithoutFeedback onPress={() => setShowModal(!showModal)}>
      <StyledGenderRender activeTheme={activeTheme} on>
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

        <Modal
          onBackdropPress={() => setShowModal(!showModal)}
          onSwipeComplete={() => setShowModal(!showModal)}
          isVisible={showModal}
          hideModalContentWhileAnimating
          style={{ margin: 0, justifyContent: 'flex-end' }}
        >
          <GenderBottomSheetContent />
        </Modal>
      </StyledGenderRender>
    </TouchableWithoutFeedback>
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
  },

  top: {
    width: 50,
    height: 4,
    borderRadius: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '0.4rem',
  },
});

export default GenderSelector;
