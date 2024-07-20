import './App.css';
const Greeting = ({ name }) => (
  <div>
    <h1>Привіт {name}!</h1>
  </div>
);
const Message = ({ text }) => (
  <div>
    <p>{text}</p>
  </div>
);
const Button = ({ onClick }) => (
  <div>
    <button onClick={onClick}>кнопка</button>
  </div>
);
function App() {
  return (
    <div>
      <Greeting
        name="Timur"
      />
      <Message
        text="Вітаю на реакт сторінці"
      />
      <Button
        onClick={() => console.log(123)}
      />
    </div>
  );
}

export default App;