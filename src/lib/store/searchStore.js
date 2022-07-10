import axios from 'axios';
import create from 'zustand';

export const searchStore = create((set, get) => ({
  queryStore: {
    q: '',
    aN: '',
    sD: '',
    eD: '',
    mC: '',
    cC: '',
    sP: '',
  },

  setQ: (input) => {
    set((state) => ({ queryStore: { ...state.queryStore, q: input } }));
  },
  setAN: (input) => {
    set((state) => ({ queryStore: { ...state.queryStore, aN: input } }));
  },
  setMC: (input) => {
    set((state) => ({ queryStore: { ...state.queryStore, mC: input } }));
  },
  setSD: (input) => {
    set((state) => ({ queryStore: { ...state.queryStore, sD: input } }));
  },
  setED: (input) => {
    set((state) => ({ queryStore: { ...state.queryStore, eD: input } }));
  },
  setCC: (input) => {
    set((state) => ({ queryStore: { ...state.queryStore, cC: input } }));
  },
  setSP: (input) => {
    set((state) => ({ queryStore: { ...state.queryStore, sP: input } }));
  },
  setQueryStore: (input) => {
    set({ queryStore: input });
  },

  searchData: async () => {
    const queryStore = get().queryStore;
    const res = await axios.get(
      'http://localhost:5000/api/search',
      { params: queryStore },
      { withCredentials: true },
    );
    console.log(res);
  },
}));
