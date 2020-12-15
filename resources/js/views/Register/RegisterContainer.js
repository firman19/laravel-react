import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import FlashMessage from 'react-flash-message'
import Axios from 'axios'

class RegisterContainer extends Component{
    // 2.1
    constructor(props){
        super(props)
        this.state = {
            isRegistered: false,
            error: '',
            errorMessage: '',
            formSubmitting: false,
            user:{
                name : '',
                email : '',
                password : '',
                password_confirmation : '',
            },
            redirect: props.redirect
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this)
    }

    // 2.2
    componentWillMount(){
        let state = localStorage["appState"];
        if (state){
            let AppState = JSON.parse(state)
            this.setState(
                {
                    isLoggedIn : AppState.isLoggedIn,
                    user : AppState
                }
            )
        }
        if (this.state.isRegistered){
            return this.props.history.push("/dashboard")
        }
    }

    // 2.3
    componentDidMount(){
        const {prevLocation} = this.state.redirect.state || {prevLocation : {pathname : '/dashboard'}}
        if(prevLocation && this.state.isLoggedIn){
            return this.props.history.push(prevLocation)
        }
    }
    
    // 2.4
    handleSubmit(e){
        e.preventDefault()
        this.setState({formSubmitting: true})
        ReactDOM.findDOMNode(this).scrollIntoView();
        let userData = this.state.user;

        Axios.post("/api/auth/signup", userData)
            .then(response =>{
                return response
            }).then(json => {
                if (json.data.success){
                    let userData = {
                        id : json.data.id,
                        name : json.data.name,
                        email : json.data.email,
                        activation_token : json.data.activation_token
                    }
                    let appState = {
                        isRegistered : true,
                        user : userData
                    }
                    localStorage["appState"] = JSON.stringify(appState);
                    this.setState(
                        {
                            isRegistered: appState.isRegistered,
                            user: appState.user
                        }
                    )
                }else{
                    alert('Registration Failed!')
                }
            }).catch(error =>{
                if(error.response){
                    let err = error.response.data
                    this.setState({
                        error: err.message,
                        errorMessage : err.errors,
                        formSubmitting: false
                    })
                }
                else if(error.request){
                    let err = error.request
                    this.setState({
                        error : err,
                        formSubmitting : false
                    })
                } else {
                    let err = error.message
                    this.setState({
                        error: err,
                        formSubmitting : false
                    })
                }
            }).finally(
                this.setState({error : ''})
            )
    }
    
    handleName(e) {
        let value = e.target.value;
        this.setState(prevState => ({
                user: {
                    ...prevState.user, first_name: value
                }
            })
        )
    }

    // 2.5
    handleEmail(e){
        let value = e.target.value;
        this.setState = ( prevState => ({
                user:{
                    ...prevState.user, email : value
                }
            })
        )
    }

    handlePassword(e){
        let value = e.target.value;
        this.setState = ( prevState => ({
                user:{
                    ...prevState.user, password : value
                }
            })
        )
    }

    handlePasswordConfirm(e){
        let value = e.target.value;
        this.setState = ( prevState => ({
                user:{
                    ...prevState.user, password_confirmation : value
                }
            })
        )
    }

    render(){
        // 2.6
        let errorMessage = this.state.errorMessage
        let arr = []
        Object.values(errorMessage).forEach(
            (value) => (arr.push(value))
        )

        return (
            <div className="container">
                
            </div>
        )
    }
}