// import logo from './lref="/"ogo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name="kavish"
function App() {
  return(
    <>
      <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container" my-3>
      <TextForm heading="Enter the Text to analyze below"/>
      </div>
    </>
)
}

export default App;
