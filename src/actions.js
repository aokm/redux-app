// type
// Reducerで使用される
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creater
// コンポーネントで使用される
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
