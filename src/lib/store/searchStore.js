import create from 'zustand';

export const searchStore = create((set) => ({
  queryStore: {
    q: '',
    aN: '',
    sD: '',
    eD: '',
    mC: '',
    cC: '',
    sP: '',
  },
  posts: [],
  speakerPosts: [],

  setQ: (input) => {
    set((state) => ({ queryStore: { ...state.queryStore, q: input } }));
  },
  setAN: (input) => {
    if (input) {
      set((state) => ({ queryStore: { ...state.queryStore, aN: input } }));
    } else {
      set((state) => ({ queryStore: { ...state.queryStore, aN: '' } }));
    }
  },
  setMC: (input) => {
    if (input) {
      set((state) => ({ queryStore: { ...state.queryStore, mC: input } }));
    } else {
      set((state) => ({ queryStore: { ...state.queryStore, mC: '' } }));
    }
  },
  setSD: (input) => {
    if (input) {
      set((state) => ({ queryStore: { ...state.queryStore, sD: input } }));
    } else {
      set((state) => ({ queryStore: { ...state.queryStore, sD: '' } }));
    }
  },
  setED: (input) => {
    if (input) {
      set((state) => ({ queryStore: { ...state.queryStore, eD: input } }));
    } else {
      set((state) => ({ queryStore: { ...state.queryStore, eD: '' } }));
    }
  },
  setCC: (input) => {
    if (input) {
      set((state) => ({ queryStore: { ...state.queryStore, cC: input } }));
    } else {
      set((state) => ({ queryStore: { ...state.queryStore, cC: '' } }));
    }
  },
  setSP: (input) => {
    if (input) {
      set((state) => ({ queryStore: { ...state.queryStore, sP: input } }));
    } else {
      set((state) => ({ queryStore: { ...state.queryStore, sP: '' } }));
    }
  },
  setQueryStore: (input) => {
    set({ queryStore: input });
  },
  setPosts: (input) => {
    set({ posts: input });
  },
  setSpeakerPosts: (input) => {
    set({ speakerPosts: input });
  },
}));
