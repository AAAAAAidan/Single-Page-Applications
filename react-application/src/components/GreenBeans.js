import damon from '../assets/damon.gif';
import './GreenBeans.css';

function GreenBeans() {
  const food = "green beans";
  return (
    <div className="App">
      <header className="App-header">
        <img src={damon} alt="Damon Gant" />
        <h1>I only eat <span className="green-strings">{food}</span> for breakfast!</h1>
      </header>
    </div>
  );
}

export default GreenBeans;
