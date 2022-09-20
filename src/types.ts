export interface StateType {
  isTop: boolean;
  cart: Record<string, any>;
  viewdItems: boolean[];
  viewedItem: number;
}

export type Keys = StateType & UseState;

export interface UseState {
  state: StateType;
  change: () => any;
  setIsTop: (value: boolean) => void;
  isViewed: (item: number, states: boolean) => void;
  viewedItem: (item: number) => void;
}
