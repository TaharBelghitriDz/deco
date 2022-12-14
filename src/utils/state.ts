import { StateType, UseState } from "types";
import create from "zustand";
import shallow from "zustand/shallow";

const useStore = create<UseState>((set) => ({
  state: { isTop: true, cart: {}, viewdItems: [], viewedItem: 1 },
  change: () => set((state) => ({ ...state })),
  setIsTop: (value: boolean) => set((state) => ({ ...state, isTop: value })),
  isViewed: (item: number, states: boolean) =>
    set((e) => ((e.state.viewdItems[item] = states), e)),
  viewedItem: (item: number) => set((e) => ((e.state.viewedItem = item), e)),
}));

export const useGetFun = (key: keyof Omit<UseState, "state">) =>
  useStore((state) => state[key] as any);

export const useGetState = (key: keyof StateType) =>
  useStore((state) => state.state[key] as StateType[typeof key]);

export default useStore;
