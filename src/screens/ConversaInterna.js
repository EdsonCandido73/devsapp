import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TouchableHighlight, Image, BackHandler, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { setActiveChat, sendMessage } from '../actions/ChatActions';
import MensagemItem from '../components/ConversaInterna/MensagemItem';

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
		this.state = {
			tmpMsg:[
				{key:1, uid:123, date:'2019-09-17 20:58', m:'Oi, tudo bem?'},
				{key:2, uid:'6vKv3fowfVc5rxBLRBKujZgaK0L2', date:'2019-09-17 20:58', m:'Tudo, e você?'},
				{key:3, uid:123, date:'2019-09-17 20:58', m:'OK, legal'},
				{key:4, uid:'6vKv3fowfVc5rxBLRBKujZgaK0L2', date:'2019-09-17 20:58', m:'Esta é uma mensagem bem grande que tem como objetivo mostrar alguma coisa na tela das conversas.'}
			],
			inputText:''
		};

		this.voltar = this.voltar.bind(this);
		this.sendMsg = this.sendMsg.bind(this);

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

	sendMsg() {
		let txt = this.state.inputText;
		let state = this.state;
		state.inputText = '';
		this.setState(state);
		alert(txt);

		this.props.sendMessage(txt, this.props.uid, this.props.activeChat);
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior='padding' enabled
   				keyboardVerticalOffset={80}>
				<FlatList
					style={styles.chatArea}
					data={this.state.tmpMsg}
					renderItem={({item})=><MensagemItem data={item} me={this.props.uid} />}
				/>
				<View style={styles.sendArea}>
					<TextInput style={styles.sendInput} value={this.state.inputText} onChangeText={(inputText)=>this.setState({inputText})} />
					<TouchableHighlight style={styles.sendButton} onPress={this.sendMsg}>
						<Image style={styles.sendImage} source={require('../assets/images/send.png')} />
					</TouchableHighlight>
				</View>
			</KeyboardAvoidingView>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		margin:10
	},
	chatArea:{
		flex:1,
		backgroundColor:'#CCCCCC'
	},
	sendArea:{
		height:50,
		backgroundColor:'#EEEEEE',
		flexDirection:'row'
	},
	sendInput:{
		height:50,
		flex:1
	},
	sendButton:{
		width:50,
		height:50,
		justifyContent:'center',
		alignItems:'center'
	},
	sendImage:{
		width:40,
		height:40
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		uid:state.auth.uid,
		activeChat:state.chat.activeChat
	};
};

const ConversaInternaConnect = connect(mapStateToProps, { setActiveChat, sendMessage } )(ConversaInterna);
export default ConversaInternaConnect;