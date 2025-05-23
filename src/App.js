import logo from './logo.svg';
import './App.css';
import H from './components/Head.js'
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';
import F from './Bottom.js';
import Body  from './Body1.js';

export default function App() {
  return (
    <div>
    <H />
    <Gallery />
    <Profile />
    <Profile />
    <Profile />
    <Profile />
    <Body />
    
    <F />
   
    

    </div>
    
  );
}
