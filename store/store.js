import { create } from "zustand";

export const useStore = create((set) => ({
  eventType: "main",
  setEventType: (type) => set({ eventType: type }),
}));
