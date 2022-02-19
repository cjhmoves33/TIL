const Wrapper = (props) => {
  return props.children;
};

const Child1 = (props) => (
  <>
    <h3>I am child 1</h3>
    {props.children}
  </>
);
const Child2 = (props) => (
  <>
    <h3>I am child 2</h3>
    {props.children}
  </>
);
const Child3 = (props) => (
  <>
    <h3>I am child 3</h3>
    {props.children}
  </>
);
const Child4 = () => (
  <>
    <h3>I am child 4</h3>
  </>
);

function App() {
  return (
    <>
      <h1>This is heading</h1>
      <h2>This is a sub-heading</h2>
      <Child1>
        <Child2>
          <Child3>
            <Child4 />
          </Child3>
        </Child2>
      </Child1>
    </>
  );
}

export default App;
