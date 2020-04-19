import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentCompnent from './components/ParentCompnent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import Lifecycle1 from './components/Lifecycle1';

function App() {
  return (
    <div className="App">

    <Lifecycle1 />

    




      {/* <Stylesheet primary = {true} />
      <Inline />

      <h1 className = 'error'>Error</h1>
      <h1 className = {styles.success}>Success</h1> */}
      {/* <NameList/> */}
      {/* <Counter />
      <Greet name ='Diana' hero = 'WW' />
      <Welcome name = "Bruce" hero = "Bat" />
      <FunctionClick></FunctionClick>
      <ClassClick/>
      <UserGreeting /> */}
      {/* <Welcome /> 
      <Greet name = "Bruce" hero = "Bat">
        <p>this is childrens props</p>
      </Greet>
      <Greet name = "Clark" hero = "Sup"/>
      <button>Action</button>
      <Greet name = "Diana" hero = "WW"/>
      <Hello/>

    
      <Welcome name = "Clark" hero = "Sup"/>
      <Welcome name = "Diana" hero = "WW"/>
      <EventBind></EventBind>
      <ParentCompnent/>*/}
    </div>
  );
}

export default App;
