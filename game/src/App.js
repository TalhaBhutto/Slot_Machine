import './App.css';
import SlotM from "./SlotM";


function App() {
  return (
    <>
      <h1 className="Heading_Style">🎰 Welcome to <span style={{fontWeight:"bold"}}> Slot Machine Game</span> 🎰</h1>
      <div>
      <SlotM x="😄" y="😄" z="😄" />
      <SlotM x="😄" y="❤️" z="🍌" />
      <SlotM x="🍌" y="❤️" z="🍌"/>
      <SlotM x="❤️" y="❤️" z="❤️"/>
      </div>
    </>
  );
}

export default App;
