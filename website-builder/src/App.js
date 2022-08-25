import './App.css';
import { render } from "react-dom"
import { Rnd } from "react-rnd"
import { useState } from "react"

const w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

const ratio = 25

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#fffff0"
};


function roundNum(n, num) {
  let r = n % num
  if (r >= num / 2) return n + (num - r)
  else return n - r
}

function mouseEnter(e) {
  var pos = e.position();
  e.css('top', (pos.top) + 50 + 'px').fadeIn();
}



function App() {
  const [dragStates, setDragStates] = useState(initializeDragStates())

  // const [dragState, setDragState] = useState({ width: "10vw", height: "10vw", x: 0, y: 0 })
  // const [dragState2, setDragState2] = useState({ width: "10vw", height: "10vw", x: 500, y: 500 })
  // const [dragState3, setDragState3] = useState({ width: "30vw", height: "20vw", x: 800, y: 600 })


  function initializeDragStates() {
    let ds = []
    let counter = 0
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 10; j++) {
        let d = {
          x: i * (w / ratio) * 6,
          y: j * (w / ratio) * 6,
          width: "12vw",
          height: "12vw",
          id: counter
        }
        counter += 1
        ds.push(d)
      }
    }

    return ds
  }

  function updateDragStates(ds) {
    let dragStatesCopy = [...dragStates]
    for (let i = 0; i < dragStatesCopy.length; i++) {
      if (dragStatesCopy[i].id === ds.id) {
        dragStatesCopy[i] = ds
      }
    }

    console.log(dragStatesCopy)
    setDragStates(dragStatesCopy)
  }

  // let state = {
  //   width: 200,
  //   height: 200,
  //   x: 10,
  //   y: 10
  // };
  return (
    <div className="mainDiv">
      <div className="gridDiv">
        <div className="App">
          {[...Array(5000).keys()].map((i) => (<Cell index={i}></Cell>))}
        </div>

        {
          dragStates.map((d) => (<Rnd
            // onMouseEnter={() => {
            //   document.getElementById(d.id).style.background = "#000000"
            // }}
            // onMouseLeave={() => {
            //   document.getElementById(d.id).style.background = "#fffff0"
            // }}
            bounds=".gridDiv"
            id={d.id}
            className="rnd"
            style={style}
            size={{ width: d.width, height: d.height }}
            position={{ x: d.x, y: d.y }}
            onDragStop={(e, drag) => {
              //setDragState({ ...dragState, x: roundNum(drag.x, vw / 50), y: roundNum(drag.y, vw / 50) });

              updateDragStates({ x: roundNum(drag.x, w / ratio), y: roundNum(drag.y, w / ratio), width: d.width, height: d.height, id: d.id })
              e.stopImmediatePropagation();
            }}
            onDrag={e => {
              e.stopImmediatePropagation();
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              updateDragStates({ x: d.x, y: d.y, width: ref.style.width, height: ref.style.height, id: d.id })
            }}
            dragGrid={[w / ratio, w / ratio]}
            resizeGrid={[w / ratio, w / ratio]}

          >
            <textarea className="gridObject" draggable="false"></textarea>
          </Rnd>))
        }

        {/* <Rnd
        onMouseEnter={() => {
          document.getElementById("1").style.background = "#000000"
        }}
        onMouseLeave={() => {
          document.getElementById("1").style.background = "#fffff0"
        }}
        id="1"
        className="rnd"
        style={style}
        size={{ width: dragState.width, height: dragState.height }}
        position={{ x: dragState.x, y: dragState.y }}
        onDragStop={(e, d) => {
          setDragState({ ...dragState, x: roundNum(d.x, vw / 50), y: roundNum(d.y, vw / 50) });
          e.stopImmediatePropagation();
        }}
        onDrag={e => {
          e.stopImmediatePropagation();
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setDragState({
            width: ref.style.width,
            height: ref.style.height,
            ...position
          });
        }}
        dragGrid={[vw / 50, vw / 50]}
        resizeGrid={[vw / 50, vw / 50]}

      >
        <textarea className="gridObject" draggable="false"></textarea>
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
      </Rnd > */}
      </div>
    </div>

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
    return (<div className="grid stretch" onClick={() => {
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
