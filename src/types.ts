export interface StateType {
  isTop: boolean;
  cart: Record<string, any>;
  viewdItems: boolean[];
}

export type Keys = StateType & UseState;

export interface UseState {
  state: StateType;
  change: () => any;
  setIsTop: (value: boolean) => void;
  isViewed: (item: number, states: boolean) => void;
}
