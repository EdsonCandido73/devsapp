import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { SignOut } from '../actions/AuthActions';

export class Config extends Component {

	static navigationOptions = {
		title:'',
		tabBarLabel:'Config',
		header:null
	}

	constructor(props) {
		super(props);
		this.state = {};

		this.sair = this.sair.bind(this);
	}

	sair() {
		this.props.SignOut();

		const resetAction = StackActions.reset({
			index:0,
			actions:[NavigationActions.navigate({routeName:'Home'})]
		});

		this.props.navigation.dispatch(resetAction);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>PAGINA CONFIG</Text>

				<Button title="Sair" onPress={this.sair} />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		marginTop:40,
		margin:10
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		uid:state.auth.uid
	};
};

const ConfigConnect = connect(mapStateToProps, { SignOut } )(Config);
export default ConfigConnect;