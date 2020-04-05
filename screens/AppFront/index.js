import React, { useEffect, cloneElement } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabIcon from '~/components/TabBarIcon';

// Screens
import CollectionScreen from './Collections';
import ProfileScreen from './Profile';

const Tab = createBottomTabNavigator();

const Icon = ({ focused, name, ...rest }) => {
  return <TabIcon focused={focused} name={name} {...rest} />;
};

const getRouteLabel = (route, props) => {
  const { descriptors } = props;
  const { options } = descriptors[route.key];
  return options.title !== undefined ? options.title : route.name;
};

const tabs = {
  Profile: {
    name: 'Profile',
    icon: {
      component: <Icon name="ios-person" />,
    },
  },

  Collection: {
    name: 'Collection',
    icon: {
      component: <Icon name="ios-settings" />,
    },
  },
};

const BottomNav = (props) => {
  const { routes, index: navigationIndex } = props.state;

  console.log();
  return (
    <View
      style={{
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        border: 1,
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => props.navigation.navigate('Collection')}
        style={{
          border: 1,
          width: 70,
          justifyContent: 'center',
          alignItems: 'center',
          height: 70,
          backgroundColor: 'black',
          borderRadius: 35,
          marginTop: -35,
          borderWidth: 10,
          borderBottomColor: '#ECEFF0',
          borderTopColor: '#ECEFF0',
          borderLeftColor: '#ECEFF0',
          borderRightColor: '#ECEFF0',
          overflow: 'hidden',
          shadowColor: '#000',
          transform: [{ rotate: '-45deg' }],
        }}
      >
        <TabIcon name="md-add" style={{ transform: [{ rotate: '45deg' }] }} />
      </TouchableOpacity>

      {/* {routes.map((route, routeIndex) => {
        const title = getRouteLabel(route, props);
        return (
          <TouchableOpacity
            key={routeIndex}
            style={{ borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => props.navigation.navigate(title)}
          >
            <>
              {cloneElement(props.tabs[title].icon.component, { focused: navigationIndex === routeIndex })}
              <Text key={routeIndex} {...route}>
                {title}
              </Text>
            </>
          </TouchableOpacity>
        );
      })} */}
    </View>
  );
};

export default function AppNavigator() {
  return (
    <Tab.Navigator
      style={{ backgroundColor: 'blue' }}
      initialRouteName="Profile"
      tabBar={(props) => <BottomNav {...props} tabs={tabs} />}
    >
      <Tab.Screen name="Collection" component={CollectionScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
