import { PropsWithChildren, ChangeEventHandler, FormEventHandler } from 'react';

type QuotesParams = PropsWithChildren<{
  count: number;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}>;

const Quotes = ({ children, count, onSubmit, onChange }: QuotesParams) => {
  return (
    <section className="flex flex-col gap-8">
      <form onSubmit={onSubmit}>
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
            onChange={onChange}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default Quotes;
