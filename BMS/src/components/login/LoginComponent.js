import React from 'react'
import './Login.scss'
export default class LoginComponnet extends React.Component{
    render(){
        return (
            <div id="login">
                <h2>用户登录</h2>
                <p><span>用户名：</span><input/></p>
                <p><span>密  码：</span><input/></p>
                <p><input type="submit" value="登录"/></p>
                {this.props.children}
            </div>
        )
    }
}