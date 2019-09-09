import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { connect } from 'react-redux';

import ConversasList from './ConversasList';
import ContatoList from './ContatoList';
import Config from './Config';

const ConversasNavigator = createBottomTabNavigator({
	ConversasList:{
		screen:ConversasList
	},
	ContatoList:{
		screen:ContatoList
	},
	Config:{
		screen:Config
	}
});

export default createAppContainer(ConversasNavigator);