import React  from 'react';


import './App.css';

function App({  }) {
  // eslint-disable-next-line
  const a = 10;
  
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center"> se connecter k8s </h2>
        <form >
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Entrez votre email"
             
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Entrez votre mot de passe"
             
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            se connecter k8s
          </button>
        </form>
        <div className="text-center mt-3">
         
        </div>
      </div>
    </div>
  );
}

export default App;
