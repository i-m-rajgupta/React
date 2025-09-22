import './App.css'
import Title from './Title.jsx';
import {Description} from './Description.jsx';
import ProductTab from './ProductTab.jsx';
import Message  from './Message.jsx';


// Rules for witing markup in jsx
// Return a single root element
// Close all the tags
// camelCase most of the things 
// If you want use the html attributes of the reserved js keywords like class then use className

// React Fragments are a feature introduced in React v16.2.0 that allow you to group multiple 
// elements without adding extra nodes to the DOM. This is particularly useful when you need to 
// return multiple elements from a component without wrapping them in an unnecessary container 
// like a div.

// In JSX, curly braces {} are used to embed JavaScript expressions within your markup.
// You can use curly braces to include variables, functions, or any valid JavaScript expression inside JSX.
function App() {
  return (
    <>
      < Message userName="Genz Coders Space" textColor="violet"/>
       < Message userName="Raj" textColor="green"/>
        <Title />
      <p>We have inside This :</p>
      <Description />
      <ProductTab />
    </>
  );
}
export default App
