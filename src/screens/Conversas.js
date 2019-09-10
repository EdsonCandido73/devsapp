import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { connect } from 'react-redux';

import ConversasStack from './ConversasStack';
import ContatoList from './ContatoList';
import Config from './Config';

const ConversasNavigator = createBottomTabNavigator({
	ConversasStack:{
		screen:ConversasStack,
		naviagationOptions:{
			tabBarLabel:'Conversas'
		}
	},
	ContatoList:{
		screen:ContatoList
	},
	Config:{
		screen:Config
	}
});

export default createAppContainer(ConversasNavigator);