import { useQuery } from "@tanstack/react-query";
import { fetchExchange } from "../helper/fn";

export const useExchangeData = () => {
  const { data, error, isLoading } = useQuery<ExchangeData, Error>({
    queryKey: ['exchange'],
    queryFn: fetchExchange,
    refetchInterval: 5000,  // Fetch data every 5 seconds
    retry: 5
  });
  
  return { data, error, isLoading };
};