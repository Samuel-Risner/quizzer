import React from 'react';

fetch("manifest.json").then((_res) => { _res.json().then((res) => { console.log(res); }); });

function App() {
  return (
    <div>
    </div>
  );
}

export default App;
