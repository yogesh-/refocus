import { quotes } from "../data/quotesDB";
import "../App.css";

export const GetQuotes = () => {
  const randomNumber = Math.floor(Math.random() * 300);
  var author = quotes[randomNumber].author;
  var quote = quotes[randomNumber].text;

  return (
    <div className="showquote font-color-default">
      <div className="show-quote-and-author font-color-default">
        <p>{quote}</p>
        By {author}
      </div>
      <div className="quote font-color-default">{quote}</div>
    </div>
  );
};
