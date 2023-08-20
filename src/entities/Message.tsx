import { FC, useEffect, useState } from "react";
import { IMessage } from "../shared/types/IMessage";
import botIcon from '../shared/icons/auto.png';
import userIcon from '../shared/icons/user.png';
import stopIcon from '../shared/icons/close.png';

export const Message: FC<IMessage> = ({ author, text }) => {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isUserMesRendered, setIsUserMesRendered] = useState(false);

  const mesWidth = text.length > 120 ? '500px' : '450px';
  
  useEffect(() => {
    setTimeout(() => {
      setIsSent(true);
    }, 300)

    setTimeout(() => {
      setIsUserMesRendered(true);
    }, 500)
  }, [isSent])

  useEffect(() => {
    let i = 0;    

    const interval = setInterval(() => {
      if (i >= text.length - 1) {       
        clearInterval(interval);
        return;
      }
  
      setMessage((prev: string) => prev + text[i++]);
    }, 50)
  }, [])

  if (author === 'bot') {
    return (
      <div className="botMessage">
        <div className="botMessageContent" style={{ width: mesWidth }}>
          <img className="botIcon" src={botIcon} alt="bot" />
          <div className="botText">
            <img className="stopIcon" src={stopIcon} alt="stop" />
            {message}
          </div>
        </div>
      </div>
    )
  } else return (
    <div className="userMessage">
      <div className="userMessageContent" style={{ width: isSent ? mesWidth : 0 }}>
        <div className="userText">{isUserMesRendered ? text : ''}</div>
        <img className="userIcon" src={userIcon} alt="user" />
      </div>
    </div>
  )
}
