import React from 'react';
import Styles from '../assets/css/home';
class HocComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>
          高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。 具体而言，<span>高阶组件是参数为组件，返回值为新组件的函数。</span>最大的特点就是重用组件逻辑。
          <a href="javascript:;" onClick={this.props.handleClick} className={this.props.visible ? Styles.red : Styles.blue}>
            click me
          </a>
        </h1>
      </div>
    );
  }
}

const Hoc = WrappedComponent => {
  return class extends React.Component {
    state = {
      visible: false
    };
    handleClick = () => {
      console.log('click', this.state);
      this.setState({ visible: !this.state.visible });
    };
    render() {
      const props = {
        ...this.state,
        ...this.props
      };
      return <WrappedComponent handleClick={this.handleClick} {...props} />;
    }
  };
};

export default Hoc(HocComponent);
