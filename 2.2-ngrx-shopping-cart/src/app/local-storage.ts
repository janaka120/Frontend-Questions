export const loadFromLocalStorage = (): any => {
  try {
    const data = localStorage.getItem('cart');
    return data ? { cart: JSON.parse(data) } : undefined;
  } catch {
    return undefined;
  }
};

export const saveToLocalStorage = (state: any): void => {
  try {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  } catch {}
};

export const localStorageMetaReducer = (reducer: any) => {
  return (state: any, action: any) => {
    const nextState = reducer(state, action);
    saveToLocalStorage(nextState);
    return nextState;
  };
};
