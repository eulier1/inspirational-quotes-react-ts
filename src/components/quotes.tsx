import { useState, PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { Quote, fetchQuotes } from './application';

export type QuotesProps = PropsWithChildren<{
  setQuotes: Dispatch<SetStateAction<Quote[]>>;
}>;

const Quotes = ({ children, setQuotes }: QuotesProps) => {
  const [count, setCount] = useState(5);

  return (
    <section className="flex flex-col gap-8">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const quotes = (await fetchQuotes(count)) as Quote[];
          setQuotes(quotes);
        }}
      >
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="0"
            max="25"
            value={count}
            onChange={(e) => setCount(e.currentTarget.valueAsNumber)}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default Quotes;
