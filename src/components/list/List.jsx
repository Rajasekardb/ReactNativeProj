import React from 'react';
import {observer} from 'mobx-react-lite';

function List({data, Component, ...restProps}) {
  return data.map(item => <Component key={item.id} {...item} {...restProps} />);
}

export default observer(List);
