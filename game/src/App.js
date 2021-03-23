import './App.css';
//import SlotM from "./SlotM";

const SlotM=(props) =>{
  let x=props.x;
  let y=props.y;
  let z=props.z;
  if(props.x==props.y && props.x==z){
  return (<div className="slot_inner">
    <h1>{"  "+x+"  "+y+"  "+z+"  "}</h1>
    <h1>This is Matching.</h1>
    <hr/>
    </div>)}
  else{
  <div className="slot_inner">
    return (<h1>{"  "+x+"  "+y+"  "+z+"  "}</h1
    ><h1>This is not Matching.</h1
    ><hr></hr>
    </div>)}
};
function App() {
  return (
    <>
      <h1 className="Heading_Style">🎰 Welcome to <span style={{fontWeight:"bold"}}> Slot Machine Game</span> 🎰</h1>
      <div>
      <SlotM x="😄" y="😄" z="😄" />
      <SlotM x="😄" y="❤️" z="🍌" />
      <SlotM x="🍌" y="❤️" z="🍌"/>
      </div>
    </>
  );
}

export default App;
