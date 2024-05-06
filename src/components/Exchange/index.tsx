import "./style.css";
import ExchangeItem from "../ExchangeItem";
import ErrorBoundary from "../../helper/ErrorBoundary";
import Skeleton from "../Skeleton";
import Message from "../Message";
import { useExchangeData } from "../../hooks/exchangeHooks";
import { TITLE_H1 } from "../../helper/constants";
import { FC } from "react";

const Exchange: FC = () => {
  const { data, error, isLoading } = useExchangeData();
  return (
    <main>
      <header>
        <h1>{TITLE_H1}</h1>
      </header>
      <section className="exchangeBar">
        {error && <Message message={error.message} type="error" />}
        <div
          className="markets-data"
          data-trackable="header | markets data"
          id="dataContainer"
        >
          <ul>
            {isLoading && <Skeleton count={2} />}
            {data &&
              data.items.map((item: Item) => (
                <ErrorBoundary key={item.symbolInput}>
                  <ExchangeItem
                    basic={item.basic}
                    quote={item.quote}
                    symbolInput={item.symbolInput}
                  />
                </ErrorBoundary>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Exchange;
