import Chatbot from 'react-chatbot-kit';
import ActionProvider from '../ActionProvider';
import MessageParser from '../MessageParser';
import config from '../config';
import { Button,   Popover } from 'reactstrap';
import {FaRobot} from "react-icons/fa";
import React, { useState ,useEffect} from 'react';

const ChatBot = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);  
    useEffect(() => {
      setPopoverOpen(!popoverOpen);
    }, []); 
    
    return ( 
        <React.Fragment>
            <Popover placement="bottom" isOpen={popoverOpen} target="PopoverClick" toggle={toggle}>
                <div >
                    <Chatbot config={config} actionProvider={ActionProvider}  messageParser={MessageParser} />
                </div>       
            </Popover>
            <Button className ="chatbotCSS"   id="PopoverClick" type="button" >
                <FaRobot className ="botIcon" size="2x"/>
            </Button>
        </React.Fragment>

     );
}
 
export default ChatBot;