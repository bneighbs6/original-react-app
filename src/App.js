import './App.css';

const handleClick = (e) => {
  console.log(e.target);
}

function App() {
  return (
    <div>  
    <h1>Hello Shalaina!</h1>
    <button onClick={handleClick}>Subscribe</button>
    </div>
  )
}

export default App;
