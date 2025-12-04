import logo from './logo.svg';
import './App.css';
import H from './components/Head.js'
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';
import F from './Bottom.js';
import Body  from './Body1.js';
import Event from './Event.js';
import State from './State.js';


export default function App() {
  return (
    <div>
     
    <H />
     <h1>Hi I am Rahat</h1>



    <Gallery />
    <Profile />
    <Profile />
    <Profile />
    
    <Event />
    <Body />
    <State />
    
    <F />
   
    

    </div>
    
  );
}
