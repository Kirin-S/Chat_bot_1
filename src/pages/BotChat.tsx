import { Chat } from "../widgets/Chat";
import { getAnswer } from "../shared/lib/lib";
import { IMessage } from "../shared/types/IMessage";
import { useState } from "react";
import { QueryInput } from "../entities/QueryInput";

const baseMessage = {
  author: 'bot',
  text: 'Hello! I’m BotHub, AI-based bot designed to answer all your questions.'
}

export const BotChat = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([baseMessage]);

  const onSendMes = () => {
    if (query) {
      setMessages((prev: IMessage[]) => [...prev, {author: 'user', text: query}]);

      getAnswer(query).then((message: any) => {
        setMessages((prev: IMessage[]) => [...prev, {author: 'bot', text: message}]);
      });

      setQuery("");
    }
  }

  return (
    <div className="botChat">
      <div className="botChatContent">
        <div className="pageTitle">Bot Chat</div>
        <div className="subTitle">AI-based service</div>

        <Chat messages={messages} />
        <QueryInput query={query} setQuery={setQuery} onSendMes={onSendMes} />
      </div>
    </div>
  )
}
