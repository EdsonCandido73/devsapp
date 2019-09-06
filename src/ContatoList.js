import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

export class ContatoList extends Component {

	static navigationOptions = {
		title:'',
		tabBarLabel:'Contatos',
		header:null
	}

	constructor(props) {
		super(props);
		this.state = {};

	}

	render() {
		return (
			<View style={styles.container}>
				<Text>PAGINA CONTATOS</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		margin:10
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		uid:state.auth.uid
	};
};

const ContatoListConnect = connect(mapStateToProps, { } )(ContatoList);
export default ContatoListConnect;