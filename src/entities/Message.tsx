import { FC } from "react";
import { IMessage } from "../shared/types/IMessage";
import botIcon from '../shared/icons/auto.png';
import userIcon from '../shared/icons/user.png';

export const Message: FC<IMessage> = ({ author, text }) => {
  if (author === 'bot') {
    return (
      <div className="botMessage">
        <div className="message">
          <img className="botIcon" src={botIcon} alt="bot" />
          <div className="botText">{text}</div>
        </div>
      </div>
    )
  } else return (
    <div className="userMessage">
      <div className="message">
        <div className="userText">{text}</div>
        <img className="userIcon" src={userIcon} alt="user" />
      </div>
    </div>
  )
}
