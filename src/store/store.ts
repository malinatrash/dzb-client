import {
  createStore,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex';
import { Mutations, mutations } from './mutations';
import { Actions, actions } from './actions';
// Раскомментировать если геттеры будут использоваться
// import { Getters, getters } from './getters';
// ----------------------------------------------------------------------------
import { State, state } from './state';

const store = createStore<State>({
  state,
  mutations,
  actions,
  // Раскомментировать если геттеры будут использоваться
  // getters,
  // ----------------------------------------------------------------------------
  strict: !import.meta.env.PROD,
});

// типизация store
export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<Actions[K]>;
} & {
  // Раскомментировать если геттеры будут использоваться
  //   getters: {
  //     [K in keyof Getters]: ReturnType<Getters[K]>;
  //   };
  // ----------------------------------------------------------------------------
};

// define your own `useStore` composition function
export function useStore() {
  return store as Store;
}

export default store;
