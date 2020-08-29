import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Second from './Second';
import React, { useState } from 'react';

function App(props) {
  const [count, setCount] = useState();



  function dataclick(){
       
      props.data('count');
  }


  return (
    <div className="App">
      <Second/>
  


  <button onClick={dataclick}>clickme</button>
    </div>
  );
}

const sendingdata = (dispatch)=> {
  return {
    data:(value)=>{
      dispatch({type:"typeman", playload:value});
    }
  }

}



export default connect(null, sendingdata)(App);
