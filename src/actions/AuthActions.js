import firebase from '../FirebaseConnection';

export const SignOut = () => {
	firebase.auth().signOut();

	return {
		type:'changeStatus',
		payload:{
			status:2
		}
	};
};

export const checkLogin = () => {

	return (dispatch) => { 


		firebase.auth().onAuthStateChanged((user)=>{
			if(user) {
				dispatch({
					type:'changeUid',
					payload:{
						uid:user.uid
					}
				});
			} else {
				dispatch({
					type:'changeStatus',
					payload:{
						status:2
					}
				});
			}
		});
	}

};

export const SignUpAction = (name, email, password) => {
	return (dispatch) => {

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((user)=>{

				let uid = firebase.auth().currentUser.uid;

				firebase.database().ref('users').child(uid).set({
					name:name
				});

				dispatch({
					type:'changeUid',
					payload:{
						uid:uid
					}
				});
			})
			.catch((error)=>{
				switch(error.code) {
					case 'auth/email-already-in-use':
						alert("E-mail já utilizado!");
						break;
					case 'auth/invalid-email':
						alert("E-mail inválido!");
						break;
					case 'auth/operation-not-allowed':
						alert("Tente novamente mais tarde!");
						break;
					case 'auth/weak-password':
						alert("Digite uma senha melhor!");
						break;
				}
			});

	};
};

export const SignInAction = (email, password) => {
	return (dispatch) => {

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((user)=>{

				let uid = firebase.auth().currentUser.uid;

				dispatch({
					type:'changeUid',
					payload:{
						uid:uid
					}
				});
			})

			.catch((error)=>{
				switch(error.code) {
					case 'auth/invalid-email':
						alert('Email inválido!');
						break;
					case 'auth/user-disable':
						alert('Seu usuário está desativado!');
						break;
					case 'auth/user-not-found':
						alert('Não existe este usuário!');
						break;
					case 'auth/wrong-password':
						alert('E-mail e/ou senha errados!');
						break;
				}
			});

	};

};


export const changeEmail = (email) => {
	return {
		type:'changeEmail',
		payload:{
			email:email
		}
	};
};

export const changePassword = (pass) => {
	return {
		type:'changePassword',
		payload:{
			pass:pass
		}
	};
};

export const changeName = (name) => {
	return {
		type:'changeName',
		payload:{
			name:name
		}
	};
};