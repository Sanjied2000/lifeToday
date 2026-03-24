import { create } from "zustand";

export const useImageStore = create((set) => ({
  imageUrl: "",
  setImageUrl: (url) => set({ imageUrl: url }),

  // optional extras
  loading: false,
  setLoading: (value) => set({ loading: value }),
}));