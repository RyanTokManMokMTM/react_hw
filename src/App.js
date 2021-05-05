
import './App.css'
import LoginField from './component/loginField'
import Card from '@material-ui/core/Card'




function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <Card  style={{height:300,padding:30,backgroundColor:'rgba(255,255,255,0.4)'}} children={LoginField()} />
      </header>
    </div>
  );
}

export default App;
