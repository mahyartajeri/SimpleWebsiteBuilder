import './App.css';
import { render } from "react-dom"
import { Rnd } from "react-rnd"
import { useState } from "react"

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#fffff0"
};


function App() {
  const [dragState, setDragState] = useState({ width: "10vw", height: "10vw", x: 100, y: 100 })
  const [dragState2, setDragState2] = useState({ width: "10vw", height: "10vw", x: 500, y: 500 })
  const [dragState3, setDragState3] = useState({ width: "30vw", height: "20vw", x: 800, y: 600 })

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
        <textarea className="gridObject"></textarea>
      </Rnd>

      <Rnd className="rnd"
        style={style}
        size={{ width: dragState2.width, height: dragState2.height }}
        position={{ x: dragState2.x, y: dragState2.y }}
        onDragStop={(e, d) => {
          setDragState2({ ...dragState2, x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setDragState2({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          });
        }}
        dragGrid={[50, 50]}
        resizeGrid={[50, 50]}
      >
        <img src="https://static.frieze.com/files/inline-images/ross-body3.jpeg" className="gridObject" draggable="false"></img>
      </Rnd>

      <Rnd className="rnd"
        style={style}
        size={{ width: dragState3.width, height: dragState3.height }}
        position={{ x: dragState3.x, y: dragState3.y }}
        onDragStop={(e, d) => {
          setDragState3({ ...dragState3, x: d.x, y: d.y });
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setDragState3({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          });
        }}
        dragGrid={[50, 50]}
        resizeGrid={[50, 50]}
      >
        <iframe className="gridObject" src="https://www.youtube.com/embed/Cj_4DupKfuk" title="JR Smith Chokes! LeBron 51 Points Game 1! 2018 NBA Finals" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen draggable="false"></iframe>
      </Rnd >
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
