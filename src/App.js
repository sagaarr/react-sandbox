import React from 'react';
import './App.css';
import Test from './components/test'
import Author from './components/author/Author';
import Image from './components/image/Image';
import Comment from './components/comment/Comment';
import Clock from './components/clock/Clock'
import EventHandling from './components/event-handling/EventHandling';
import Toggle from './components/event-handling/Toggle';
import Form from './components/Form/Form';
import SelectTag from './components/SelectTag/SelectTag';

function App() {
  return (
    <div className="App">
      <Clock />
      <EventHandling />
      <Toggle />
        <Test name={'sagar'}/>
        <Author author={'V.P.kale'}/>
        <Image image={'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}/>
        <Comment comment={'Test comment for component itegration'}/>
        <Form />
        <br/>
        <div className="border">
        <SelectTag />
        </div>
    </div>
  );
}

export default App;
