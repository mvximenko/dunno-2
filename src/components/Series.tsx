import React, { useReducer } from 'react';
import useFetchLists from '../store/list/listActions';
import listReducer from '../store/list/listReducer';

const Series = () => {
  const [lists, listsDispatch] = useReducer(listReducer, {
    networks: [],
    titles: [],
  });

  useFetchLists(listsDispatch);
  const { titles, networks } = lists;

  return (
    <>
      {titles.map((title, index: number) => (
        <h1 key={index}>{networks[index]}</h1>
      ))}
    </>
  );
};

export default Series;
