import './App.css';
import Recipes from './recipes';


function App() {
  return (
    <div className="App">
		<div>
			<h1 className = "recommend">RECOMMENDED</h1>
			<h2 className = "recipes">Recipes</h2>
		</div>
		<Recipes/>
    </div>

  );
}

export default App;
