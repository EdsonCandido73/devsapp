import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MensagemItem extends Component {

	constructor(props) {
		super(props);

		let bgColor = '#EEEEEE';
		let align = 'flex-start';
		let txtAlign = 'left';

		if(this.props.data.uid == this.props.me) {
			bgColor = '#9999FF';
			align = 'flex-end';
			txtAlign = 'right';
		}

		this.state = {
			bgColor:bgColor,
			align:align,
			txtAlign:txtAlign
		};

	}
	
	render() {
		return (
			<View style={[MensagemItemStyles.area, {alignSelf:this.state.align, backgroundColor:this.state.bgColor}]}>
				<Text style={{textAlign:this.state.txtAlign}}>{this.props.data.m}</Text>
				<Text style={MensagemItemStyles.dateTxt}>{this.props.data.date}</Text>
			</View>
		); 
	} 

}

const MensagemItemStyles = StyleSheet.create({
	area:{
		marginLeft:10,
		marginRight:10,
		marginTop:5,
		marginBottom:5,		
		padding:10,
		maxWidth:'80%',
		borderRadius:5
	},
	dateTxt:{
		fontSize:9,
		textAlign:'right'
	}
});