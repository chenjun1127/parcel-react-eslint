import React, { Component, useState, useReducer, useEffect } from 'react';
import Title from '../../components/Title';
import Styles from '../../assets/css/main';

export default class Hooks extends Component {
  render() {
    return (
      <div>
        <h1>
          Hooks 是React版本16.8中的新功能。 请记住，我们不能在函数组件中使用state ，因为它们不是类组件。<span className={Styles.bold}>Hooks 让我们在函数组件中可以使用state 和其他功能。</span>我们可以使用一些钩子，例如useState，useEffect，useContext，useReducer等。Hooks 基本原则：Hooks 应该在外层使用，不应该在循环，条件或嵌套函数中使用；Hooks 应该只在函数组件中使用。
        </h1>
        <Title title="Hooks useState" />
        <User />
        <Title title="Hooks useReducer" />
        <Counter />
        <Title title="Hooks useEffect" />
        <Effect />
      </div>
    );
  }
}
/**
 *
 * @param {*} param0
 */
const User = () => {
  const [user, setUser] = useState({
    name: 'Jone',
    age: 30,
    address: '广东省东莞市'
  });
  return (
    <>
      <div className={Styles.list}>
        <div className="label">Name:</div>
        <div>{user.name}</div>
      </div>
      <div className={Styles.list}>
        <div className="label">Address:</div>
        <div>{user.address}</div>
      </div>
      <div className={Styles.list}>
        <div className="label">Age:</div>
        <div>{user.age}</div>
      </div>
      <p className={Styles.mb}>
        <a href="javascript:;" onClick={() => setUser({ name: 'Jack', age: 32, address: '广东省深圳市' })}>
          Click me
        </a>
      </p>
    </>
  );
};

/**
 *
 * @param {*} state
 * @param {*} action
 */

const reducer = (state, action) => {
  switch (action.type) {
    case 'up':
      return { count: state.count + 1 };
    case 'down':
      return { count: state.count - 1 };
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 1 });
  return (
    <div className={`${Styles.list} ${Styles.btns}`}>
      <button onClick={() => dispatch({ type: 'up' })}>+</button>
      <span> {state.count}</span>
      <button onClick={() => dispatch({ type: 'down' })}>-</button>
    </div>
  );
};

const Effect = () => {
  const [count, setCount] = useState(0);
  // => componentDidMount/componentDidUpdate
  useEffect(() => {
    // update
    document.title = `You clicked ${count} times`;
    // => componentWillUnMount
    return function cleanup() {
      document.title = 'app';
    };
  }, [count]);

  return (
    <div className={`${Styles.list} ${Styles.btns} ${Styles.flexColumn}`}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
