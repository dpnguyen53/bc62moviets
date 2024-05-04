export type AppState<T> = {
  loading: boolean;
  data: T[] | null;
  error: any;
};

export type Action = {
  type: string;
  payload?: any;
};

export type AppStateDetails<K> = {
  loading: boolean;
  data: K | null;
  error: any;
};
