import React from 'react';

function List({data, Component, ...restProps}) {
  return data.map(item => <Component key={item.id} {...item} {...restProps} />);
}

export default List;
