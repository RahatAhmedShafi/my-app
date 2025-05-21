import logo from './logo.svg';
import './App.css';

function Profile() {
  return (
   <div>
   <img  src="bg.jpg" alt="" className="w-50 h-20 rounded-xl"/><br />
   </div>
  );
}
function App() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-blue-800">welcome to ReactJs </h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
   
  );
}

export default App;
