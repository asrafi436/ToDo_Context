
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { NoteList } from './components/NoteList';




function App() {

  return (
    <div className="App">
      <Form/>
      <NoteList/>
    </div>
  );
}

export default App;
