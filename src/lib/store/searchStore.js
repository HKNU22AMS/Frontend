import create from 'zustand';
import axios from 'axios';
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
  posts: [],
  speakerPosts: [],
  committeeArr: [],

  setQ: (input) => {
    set((state) => ({ queryStore: { ...state.queryStore, q: input } }));
  },
  setAN: (input) => {
    if (input.length > 0) {
      set((state) => ({ queryStore: { ...state.queryStore, aN: input } }));
    } else {
      set((state) => ({ queryStore: { ...state.queryStore, aN: '' } }));
    }
  },
  setMC: (input) => {
    if (input.length > 0) {
      set((state) => ({ queryStore: { ...state.queryStore, mC: input } }));
    } else {
      set((state) => ({ queryStore: { ...state.queryStore, mC: '' } }));
    }
  },
  setSD: (input) => {
    if (input.length > 0) {
      set((state) => ({ queryStore: { ...state.queryStore, sD: input } }));
    } else {
      set((state) => ({ queryStore: { ...state.queryStore, sD: '' } }));
    }
  },
  setED: (input) => {
    if (input.length > 0) {
      set((state) => ({ queryStore: { ...state.queryStore, eD: input } }));
    } else {
      set((state) => ({ queryStore: { ...state.queryStore, eD: '' } }));
    }
  },
  setCC: (input) => {
    if (input.length > 0) {
      set((state) => ({ queryStore: { ...state.queryStore, cC: input } }));
    } else {
      set((state) => ({ queryStore: { ...state.queryStore, cC: '' } }));
    }
  },
  setSP: (input) => {
    if (input.length > 0) {
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
  setComArr: (input) => {
    const committeeArr = get().committeeArr;
    !committeeArr.includes(input.committee) &&
      set((state) => ({
        committeeArr: [...state.committeeArr, input.committee],
      }));
  },

  searchData: async () => {
    const queryStore = get().queryStore;
    const setPosts = get().setPosts;
    try {
      const res = await axios.get(
        'http://localhost:5000/api/search',
        { params: queryStore },
        { withCredentials: true },
      );
      setPosts(res.data);
    } catch (err) {
      console.log(err);
      return 0;
    }
  },
  getCom: async () => {
    const setComArr = get().setComArr;
    try {
      const res = await axios.get('http://localhost:5000/api/comms');
      res.data.map((e) => setComArr(e));
    } catch (err) {
      console.log(err);
      return 0;
    }
  },
}));
