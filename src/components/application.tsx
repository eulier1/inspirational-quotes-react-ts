import { ChangeEvent, FormEvent, useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>();
  const [count, setCount] = useState(0);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCount(event.currentTarget.valueAsNumber);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const quotes = await fetchQuotes(count);
    setQuotes(quotes);
  }

  return (
    <main className="mx-auto w-full max-w-2xl py-16">
      <Quotes count={count} onChange={handleChange} onSubmit={handleSubmit}>
        {quotes && (
          <div className="grid grid-cols-2 gap-4">
            {quotes.map((quote) => (
              <InspirationalQuote
                key={quote.id}
                content={quote.content}
                source={quote.source}
              />
            ))}
          </div>
        )}
      </Quotes>
    </main>
  );
};

export default Application;
