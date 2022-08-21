import './App.css';
import { render } from "react-dom"
import { Rnd } from "react-rnd"
import { useState } from "react"

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};


function App() {
  const [dragState, setDragState] = useState({ width: "10vw", height: "10vw", x: 100, y: 100 })

  // let state = {
  //   width: 200,
  //   height: 200,
  //   x: 10,
  //   y: 10
  // };
  return (
    // <div className="App">
    //   {[...Array(5000).keys()].map((i) => (<Cell index={i}></Cell>))}
    // </div>
    <>
      <Rnd className="rnd"
        style={style}
        size={{ width: dragState.width, height: dragState.height }}
        position={{ x: dragState.x, y: dragState.y }}
        onDragStop={(e, d) => {
          setDragState({ ...dragState, x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setDragState({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          });
        }}
        dragGrid={[50, 50]}
        resizeGrid={[50, 50]}
      >
        Rnd
      </Rnd>
    </>

    // <Rnd
    //   size={{ width: state.width, height: state.height }}
    //   position={{ x: state.x, y: state.y }}
    //   onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
    //   onResizeStop={(e, direction, ref, delta, position) => {
    //     this.setState({
    //       width: ref.style.width,
    //       height: ref.style.height,
    //       ...position,
    //     });
    //   }}
    // >
    //   001
    // </Rnd>
  );

  function Cell({ index }) {
    return index === 75 ?
      (<div className="grid image" onClick={() => {
        alert("INDEX:" + index)
      }}></div>)
      :
      (<div className="grid" onClick={() => {
        alert("INDEX:" + index)
      }}></div>)

  }
}


export default App;


/*get page height
// get page width-use as condition in for loop 
// 
// i+1
// nested for loop for the height 
i+
$(document).height();
$(document).width();
*/
