import { useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';
import { SET_LIST, FetchListAction, Titles } from './listTypes';

const endpoints = [
  { id: 49, network: 'HBO' },
  { id: 13, network: 'Nickelodeon' },
  { id: 56, network: 'Cartoon Network' },
  { id: 54, network: 'Disney' },
  { id: 80, network: 'Adult Swim' },
  { id: 19, network: 'FOX' },
  { id: 67, network: 'Showtime' },
  { id: 174, network: 'AMC' },
  { id: 318, network: 'Starz' },
];

export default function useFetchLists(
  dispatch: React.Dispatch<FetchListAction>
): void {
  useEffect(() => {
    endpoints.forEach(({ id, network }) => {
      const key: string = network;
      if (sessionStorage.getItem(key)) {
        const data = JSON.parse(sessionStorage.getItem(key) as string);
        dispatch({ type: SET_LIST, network, titles: data.results });
      } else {
        fetch(
          `${API_URL}discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_networks=${id}`
        )
          .then((res) => res.json())
          .then((data) => {
            dispatch({ type: SET_LIST, network, titles: data.results });
            sessionStorage.setItem(key, JSON.stringify(data));
          });
      }
    });
  }, [dispatch]);
}
