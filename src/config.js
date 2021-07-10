
// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "HaoBot",
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#4498ec",
      
    },
    chatButton: {
      backgroundColor: "#4498ec",
    },
  },



  initialMessages: [createChatBotMessage(`Hello, I am Hao Li's Bot!`)]


}

export default config;
