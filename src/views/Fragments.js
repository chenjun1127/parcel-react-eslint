import React, { Component } from 'react';
import Styles from '../assets/css/home';

export default class Fragments extends Component {
  static defaultProps = {
    Columns: [
      {
        id: 1,
        name: 'jone',
        description: '一位自由学习者'
      },
      {
        id: 2,
        name: 'jack',
        description: '开发者'
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。我们只需要用 React.Fragment 或者简写 “尖括号” 来包裹内容就行了。</h1>
        <table className={Styles.table}>
          <Columns {...this.props} />
        </table>
      </div>
    );
  }
}

const Columns = props => {
  return (
    <tbody>
      <tr>
        {props.Columns.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </React.Fragment>
          );
        })}
      </tr>
    </tbody>
  );
};
