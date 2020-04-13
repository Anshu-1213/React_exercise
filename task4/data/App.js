import React from 'react';
import logo from './logo.svg';
import './App.css';

import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ComponentC from './components/ComponentC';
import { userProvider, UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <UserProvider value="Anshu">

      <ComponentC />   
      </UserProvider>
      
    </div>
  );
}

export default App;
