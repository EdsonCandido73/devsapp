import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ConversasStack from './ConversasStack';
import ContatoList from './ContatoList';
import Config from './Config';

const ConversasNavigator = createBottomTabNavigator({
	ConversasStack:{
		screen:ConversasStack,
		navigationOptions:{
			tabBarLabel:'Conversas',
			header: null,	
		}
	},
	ContatoList:{
		screen:ContatoList
	},
	Config:{
		screen:Config
	}
});

ConversasStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const ConversationsAppContainer = createAppContainer(ConversasNavigator);

export default ConversationsAppContainer;