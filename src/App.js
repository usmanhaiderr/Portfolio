import React from 'react';
import ArticleList from './Blog';
import Experience from './Experience';
import Nav from './Header';
import CallToActionWithAnnotation from './Hero';



function App() {
  return (
    <div className="App">
      <Nav />
      <CallToActionWithAnnotation />
      <ArticleList />
      <Experience />
    </div>
  );
}

export default App;
