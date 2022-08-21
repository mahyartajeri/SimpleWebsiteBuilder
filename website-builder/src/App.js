import './App.css';


function App() {
  return (
    <div className="App">
      {[...Array(5000).keys()].map((i) => (<Cell index={i}></Cell>))}
    </div>
  );
    
  function Cell({index}) {
    return <div className="grid" onClick={() => {
      alert("INDEX:" + index)
    }}></div>
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
