import "./StartScreen.css"

const StartScreen = ({startGame}) => {
  return (
    <div className="start">
        <h1>Secret World</h1>
        <p>Press the button to start playing</p>
        <button onClick={startGame}>Clique aqui</button>
    </div>
  )
}

export default StartScreen