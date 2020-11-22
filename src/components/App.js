import React from 'react';
import Header from "./Header";
// import KegList from "./KegList";
import KegControl from "./KegControl";

function App() {
  return (
  <React.Fragment>
    <Header />
    <div class = "container">
      <div class="row">
        <div class="col-md-4">
          <KegControl />
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </div>

  </React.Fragment>
  );
}

export default App; 