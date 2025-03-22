import { Card, CardHeader, CardBody } from 'reactstrap';
import Section from '../components/section';

/*
  JSX = JavaScript XML (extensible markup language)

  XML vs. HTML

  HTML: Strict set of rules
    <p id="foo" class="bar">Something</p>
   
  XML: Make up your own rules
    - Must follow same syntax as HTML
      <tag attribute="someValue"></tag>
*/

/*
  React converts JSX into HTML
    document.createElement()...
  
  React.createElement('div', {
    className: 'App'
  })
  
  Injects created HTML into React Tree
  <App /> renders the component by invoking the function App()
*/

// function sayName(name) {
//   console.log('My name is', name)
// }

// sayName('Nas');
// sayName('Mary')

function Home() {
  return (
    <div className="App">
      <Section title="Welcome to my Expense Tracker App" content="Get Started by creating your first expense" />
      <Section title="My Expenses" content="Here are all my expenses..." />
      <Section title="My Income" content="Here are my income transactions..." />
    </div>
  );
}

export default Home;

/*
  React Tree:

  <root>
    <component1>
    </component1>
    <component2>
    </component2>
  </root>


  <html>
    <body>
      <div id="container">
        React tree goes
      </div>
    </body>
  </html>
*/