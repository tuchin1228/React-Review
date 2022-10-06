import logo from './logo.svg';
import './App.css';
import {TestTitle} from './StyleComponents/TestStyle.js';
import MainStyle from './styleModule/main.module.css';
import styled from 'styled-components';
import { useSelector , useDispatch} from 'react-redux';
import { setLogin , setLogout} from './store/userSlice'

function App() {

  const state = useSelector(state => state.user)
  const dispatch = useDispatch();
  console.log('state',state);

  const Login = () =>{
    dispatch(setLogin({
      name:'Alex',
      age:10,
      email:'email@gmail.com'
    }))
  }

  const Logout = () =>{
    dispatch(setLogout())
  }

  return (
    <div className="App">
      <header className="App-header">

        <h2 className={MainStyle.test}>Style module標題</h2>
        <Title>StyleComponents標題</Title>
        <TestTitle>StyleComponents import標題</TestTitle>
        <h2 className="text-red-500">Tailwind標題</h2>

        {/* <Todolist /> */}
        {state.profile.login ?'登入中':'未登入'}
        <button onClick={()=>Login()}>登入</button>
        <button onClick={()=>Logout()}>登出</button>
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
