import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtlis" aboutText="About Us" />
      <div className="container">
        <TextForm heading="Enter the text here below..." />
      </div>
    </>
  );
}

export default App;
