import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './5187-liquid-checkmark-loading.json'


class SignInAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultOptions:{
                loop: false,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            }
        }
        
    }   
    componentDidMount(){
        setTimeout(() => {
            this.props.history.push('/')
        }, 3000);
    }
    render(){
        return (
            <div id='lottieContainer' style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Lottie options={this.state.defaultOptions}
                    height={400}
                    width={400}
                    background={"#38c172"}
                />
            </div >
        )
    }
    
}
export default SignInAnimation