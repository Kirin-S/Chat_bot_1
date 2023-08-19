import { FC } from "react";
import { IQueryInput } from "../shared/types/IQueryInput";
import sendIcon from "../shared/icons/send.png";

export const QueryInput: FC<IQueryInput> = ({ query, setQuery, onSendMes }) => {
  return (
    <div className="queryInputWrap">
      <input
        className="queryInput"
        placeholder="Start typing here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={e => e.key === 'Enter' ? onSendMes() : null}
      />
      <img className="sendButton" onClick={onSendMes} src={sendIcon} alt="send" />
    </div>
  )
}
