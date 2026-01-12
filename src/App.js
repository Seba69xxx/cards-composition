import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className="container mt-5 d-flex flex-column align-items-center gap-4">
      
      <Card img="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#go" className="btn btn-primary">Go somewhere</a>
      </Card>

      <Card>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#go" className="btn btn-primary">Go somewhere</a>
      </Card>

    </div>
  );
}

export default App;
