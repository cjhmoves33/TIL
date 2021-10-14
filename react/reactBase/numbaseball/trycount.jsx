import React, { PureComponent } from 'react';

class TryCount extends PureComponent {
  render() {

    const { count } = this.props;

    return (
      <div>count: {count}</div>
    );
  };
}

export default TryCount;