
import MyComp from './MyCompo';
import { Graph, Node, Edge } from 'cytoscape-react';



function App() {
  return (
    <div style={{ position: "relative", height: 200, width: 500, border: '1px solid red' }}>
      <Graph layoutParams={{ name: 'cose' }}>
        <Node key="foo" id="foo"><MyComp /></Node>
        <Node key="bar" id="bar"><MyComp /></Node>
        <Node key="baz" id="baz"><MyComp /></Node>

        <Edge key="foo_bar" id="foo_bar" source="foo" target="bar" />
        <Edge key="bar_baz" id="bar_baz" source="bar" target="baz" />
      </Graph>
    </div>
  );
}

export default App;
