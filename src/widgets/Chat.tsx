import { FC, useMemo } from "react";
import { Message } from "../entities/Message";
import { IMessage } from "../shared/types/IMessage";


interface IChat {
  messages: IMessage[]
}

export const Chat: FC<IChat> = ({ messages }) => {

  const renderMessages = useMemo(() => (
    messages.map((item, index) => <Message key={index} author={item.author} text={item.text} />)
  ), [messages])

  return (
    <div className="chat">{renderMessages}</div>
  )
}
