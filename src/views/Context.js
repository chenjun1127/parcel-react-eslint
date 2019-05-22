import React, { Component } from 'react';
const ThemeContext = React.createContext('light');
export default class Context extends Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <h1>Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。</h1>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}
// 中间组件
const Toolbar = () => {
  return <ThemedButton />;
};
// 接受组件
class ThemedButton extends Component {
  static contextType = ThemeContext;
  render() {
    return <div>Context传递的值：{this.context}</div>;
  }
}
