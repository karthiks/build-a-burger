import React from 'react';
import Layout from './stateless/layout';
import BurgerBuilder from './stateful/burgerBuilder'

function App() {
  return (
    <Layout>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;
