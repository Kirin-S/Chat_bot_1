import axios from "axios";

interface IChunk {
  status: string;
  value: string | null;
}

export const getAnswer = (message: string) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://185.46.8.130/api/v1/chat/send-message", {message})
      .then((answer) => {
        if (answer.status !== 200) {
          resolve("Some error occurred")
        } else {
          const jsonString = answer.data.split('}{').join('},{');
          const jsonArray = `[${jsonString}]`;
          const parsedArray = JSON.parse(jsonArray);
  
          const result = parsedArray.reduce((accum: any, item: IChunk) => accum + item.value, '')
          resolve(result);
        }
      })
      .catch(err => reject(err))
  })
}