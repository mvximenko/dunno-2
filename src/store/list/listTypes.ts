export const SET_LIST = 'SET_DATA';

export interface Titles {
  id: number;
  name: string;
  title: string;
  poster_path: string;
}

export interface FetchList {
  titles: Titles[][];
  networks: string[];
}

export interface FetchListAction {
  type: typeof SET_LIST;
  titles: Titles[];
  network: string;
}

export type ListActionsTypes = FetchListAction;
