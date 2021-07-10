import logo from './logo.svg';
import './App.css';
import Education from './component/Education';
import Footer from "./component/Footer";
import Projects from './component/Projects';
import Header from './component/HeaderComponent'; 
import ChatBot from './component/ChatBot';
function App() {
  return (
    <div className="App  ">
        <Header/>
        <ChatBot/> 
        <Education/>
        <Projects/>
        <Footer/>        
     </div>
  );
}

export default App;
