import React from 'react';
import EncryptedButton from './Component/EncryptedButton';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Encrypted Button Demo</h1>
        <EncryptedButton text="Hover to Decrypt" />
        
        <div style={{ marginTop: '20px' }}>
          <EncryptedButton 
            text="Custom Speed" 
            revealSpeed={100}
          />
        </div>
        
        <div style={{ marginTop: '20px' }}>
          <EncryptedButton text="Looping Decrypt" loop={true} />
        </div>
      </header>
    </div>
  );
}

export default App;
