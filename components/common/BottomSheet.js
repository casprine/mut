import React, { useContext, forwardRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

// theme
import theme from '~/theme';

//context
import { ThemeContext } from '~/context';

const BottomSheet = forwardRef(({ children, height, customStyles }, ref) => {
  const { activeTheme } = useContext(ThemeContext);

  return (
    <>
      <RBSheet
        ref={ref}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={height}
        customStyles={{
          ...customStyles,
          draggableIcon: {
            backgroundColor: theme.colors[activeTheme].lightText,
          },
          wrapper: {
            backgroundColor: 'transparent',
          },

          container: {
            backgroundColor: theme.colors[activeTheme].bottomSheetBackground,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
          },
        }}
      >
        {children}
      </RBSheet>
    </>
  );
});

export default BottomSheet;
