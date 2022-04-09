import { quotes } from "../data/quotesDB";
import "../App.css";

export const GetQuotes = () => {
  const randomNumber = Math.floor(Math.random() * 300);
  const getquote = quotes[randomNumber].text;
  const get_quote_author = quotes[randomNumber].author;

  return (
    <div className="showquote">
      <div className="show-quote-and-author">
        <p>{getquote}</p>
        By {get_quote_author}
      </div>
      <div className="quote">{getquote}</div>
    </div>
  );
};
