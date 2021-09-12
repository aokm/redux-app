// type
// Reducerで使用
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creater
// コンポーネントで使用
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
