import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

function Second(props) {
  return (
    <div className="">
      {props.name}
  
    </div>
  );
}


const receieddata = (state)=>{
	return{
		name:state.name
	}
}



export default connect(receieddata)(Second);
