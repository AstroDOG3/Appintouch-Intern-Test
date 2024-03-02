import React from 'react';
import './recipes.css'; // Assuming your CSS is located in src/index.css

const Recipes = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <img src="./img/unnamed.jpg" alt="Somtum" />
          <div className="intro">
            <h4>SOMTUM</h4>
            <p>Som tam is a Thai papaya salad. Don't confuse Thai salads with the boring leafy salads the rest of the world enjoys.</p>
          </div>
        </div>
        
        <div className="card">
          <img src="./img/Mango.jpg"  alt="Mango Sticky Rice" />
          <div className="intro">
            <h4>Mango Sticky Rice</h4>
            <p>Mango sticky rice is a traditional Southeast Asian and South Asian dessert made with glutinous rice, fresh mango and coconut milk, and eaten with a spoon or the hands</p>
          </div>
        </div>
        
        <div className="card">
          <img src="./img/tomyum.jpeg" alt="tomyum" />
          <div className="intro">
            <h4>Tom Yum Kung</h4>
            <p>It is a soup that normally includes shrimp. The strong hot and sour flavors makes it very popular in Thai cuisine.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
