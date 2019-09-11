import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { connect } from 'react-redux';

import ConversasList from './ConversasList';
import ConversaInterna from './ConversaInterna';

const ConversasStackNavigator = createStackNavigator({
	ConversasList:{
		screen:ConversasList
	},
	ConversaInterna:{
		screen:ConversaInterna
	}
});

export default createAppContainer(ConversasStackNavigator);
