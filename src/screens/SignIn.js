import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Keyboard, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import LoadingItem from '../components/LoadingItem';
import { checkLogin, changeEmail, changePassword, SignInAction } from '../actions/AuthActions';

export class SignIn extends Component {

	static navigationOptions = {
		title:'Login'
	}

	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	componentDidUpdate() {
		if(this.props.status == 1) {
			Keyboard.dismiss();
			this.props.navigation.navigate('Conversas');
		}
	}

	
	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior='padding' enabled
   				keyboardVerticalOffset={80}>
				<Text>Digite seu e-mail</Text>
				<TextInput style={styles.input} value={this.props.email} onChangeText={this.props.changeEmail} />

				<Text>Digite sua senha</Text>
				<TextInput secureTextEntry={true} style={styles.input} value={this.props.password} onChangeText={this.props.changePassword} />
			
				<Button title='Entrar' onPress={()=> {
					this.setState({loading:true});
					this.props.SignInAction(this.props.email, this.props.password, ()=>{
						this.setState({loading:false})
					});
				}} />

				<LoadingItem visible={this.state.loading} />
			</KeyboardAvoidingView>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		margin:30,
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	h1:{
		fontSize:30,
		marginBottom:50
	},
	input:{
		width:'80%',
		fontSize:23,
		height:50,
		backgroundColor:'#DDDDDD',
		marginBottom:10
	}

});

const mapStateToProps = (state) => {
	return {
		uid:state.auth.uid,
		email:state.auth.email,
		password:state.auth.password,
		status:state.auth.status
	};
};

const SignInConnect = connect(mapStateToProps, { checkLogin, changeEmail, changePassword, SignInAction })(SignIn);
export default SignInConnect;