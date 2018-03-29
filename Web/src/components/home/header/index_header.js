import React from 'react'
import {Route,Router,hashHistory} from 'react-router'
import './index_header.scss'
export default class Index_header extends React.Component{
    _search(){
        hashHistory.push('/_search');
    }
    render(){
        return(
            <div>
                <div id="index_header">
                    <header id="listHeader" className="bar bar-nav">
                        <a href="" className="icon">
                            <span className="m-city">广州</span>
                        </a> 
                        <div className="header_c">
                        <i className="icon-search"></i> 
                        <input type="text" id="listSearch" placeholder="你好" onClick=
                        {this._search.bind(this)} />
                        </div>
                        <a href="" className="icon icon-user"></a> 
                    </header>
                    {this.props.children}
                </div>
                
            </div>
        ) 
    }
}