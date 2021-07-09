import logo from './logo.svg';
import './App.css';
import Education from './component/Education';
import Footer from "./component/Footer";
import Projects from './component/Projects';
import Header from './component/HeaderComponent';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';


function App() {
  return (
    <div className="App  ">
        <Header/>
        <div  	className="fixedContainer"  >
          <div className="row justify-content-end ">
            <div className ="col-4 justify-content-end">
              <Chatbot config={config} actionProvider={ActionProvider} className ="chatbotCSS" messageParser={MessageParser} />
            </div>
          </div>
        </div>
        <Education/>
        <Projects/>
        <Footer/>
        
     </div>
  );
}

export default App;
