import { StateType, UseState } from "types";
import create from "zustand";
import shallow from "zustand/shallow";

const useStore = create<UseState>((set) => ({
  state: { isTop: true, cart: {}, viewdItems: [] },
  change: () => set((state) => ({ ...state })),
  setIsTop: (value: boolean) => set((state) => ({ ...state, isTop: value })),
  isViewed: (item: number, states: boolean) =>
    set((e) => ((e.state.viewdItems[item] = states), e)),
}));

export const useGetFun = (
  key: keyof Omit<UseState, "state">,
  p: Parameters<UseState[typeof key]>
) => useStore((state) => (state[key] as any)(...p));

export const useGetState = (key: keyof StateType) =>
  useStore((state) => state.state[key], shallow);

export default useStore;
