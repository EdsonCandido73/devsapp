import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableHighlight, Image, BackHandler, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { setActiveChat } from '../actions/ChatActions';

export class ConversaInterna extends Component {

	static navigationOptions = ({navigation}) => ({
		title:navigation.state.params.title,
		headerLeft:(
			<TouchableHighlight onPress={()=>{navigation.state.params.voltarFunction()}} underlayColor={'transparent'}>
				<Image source={require('../../node_modules/react-navigation-stack/src/views/assets/back-icon.png')} style={{width:25, height:25, marginLeft:20}} />
			</TouchableHighlight>
		)
	})

	static defaultNavigationOptions = ({navigation}) => ({
		tabBarVisible: false
	})

	constructor(props) {
		super(props);
		this.state = {};

		this.voltar = this.voltar.bind(this);

	}

	componentDidMount() {
		this.props.navigation.setParams({voltarFunction:this.voltar});
		BackHandler.addEventListener('hardwareBackPress', this.voltar);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.voltar);
	}

	voltar () {
		this.props.setActiveChat('');
		this.props.navigation.goBack();

		return true;
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled="true">
				<FlatList
					style={styles.chatArea}
					data={[]}
					renderItem={()=><Text>...</Text>}
				/>
				<View style={styles.sendArea}>
					<TextInput style={styles.sendInput} />
				</View>
			</KeyboardAvoidingView>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		margin:10,
		flex:1
	},
	chatArea:{
		flex:1,
		backgroundColor:'#FF0000'
	},
	sendArea:{
		height:50,
		backgroundColor:'#00FF00'
	},
	sendInput:{
		height:50,
		flex:1
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		uid:state.auth.uid
	};
};

const ConversaInternaConnect = connect(mapStateToProps, { setActiveChat } )(ConversaInterna);
export default ConversaInternaConnect;