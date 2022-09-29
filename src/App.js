import logo from './logo.svg';
import './App.css';
import {TestTitle} from './StyleComponents/TestStyle.js';
import MainStyle from './styleModule/main.module.css';
import styled from 'styled-components';
import Todolist from './Todolist'

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <h2 className={MainStyle.test}>Style module標題</h2>
        <Title>StyleComponents標題</Title>
        <TestTitle>StyleComponents import標題</TestTitle>
        <h2 className="text-red-500">Tailwind標題</h2>

        <Todolist />
      </header>
    </div>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: green;
`;

export default App;
