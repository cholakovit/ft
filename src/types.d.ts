

type Item = {
  symbolInput: string;
  basic: BasicInfo;
  quote: QuoteInfo;
}

type BasicInfo = {
  symbol: string;
  name: string;
  exchange: string;
  exhangeCode: string;
  bridgeExchangeCode: string;
  currency: string;
}

type QuoteInfo = {
  lastPrice: number;
  openPrice: number;
  high: number;
  low: number;
  closePrice?: number;
  previousClosePrice: number;
  change1Day: number;
  change1DayPercent: number;
  change1Week: number;
  change1WeekPercent: number;
  ask?: number;
  bid?: number;
  timeStamp: string;
  volume: number;
}

type ExchangeData = {
  items: Item[];
}

type Props = {
  children: ReactNode;
}

type State = {
  hasError: boolean;
  errorMessage: string;
}

type MessageProps = {
  message: string;
  type: 'error' | 'success';
}

type SkeletonProps = {
  count?: number;  // Using `?` to indicate that `count` is optional
}