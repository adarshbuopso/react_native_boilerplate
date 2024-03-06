import React from 'react';
import {FlatList} from 'react-native';
import {ICustomFlatListProps} from '../../types/components';

const CustomFlatList = <ItemT,>({
  data,
  renderItem,
  keyExtractor,
  ...restProps
}: ICustomFlatListProps<ItemT>) => (
  <FlatList
    data={data}
    renderItem={({item, index}) => renderItem(item, index)}
    keyExtractor={
      keyExtractor ? (item, index) => keyExtractor(item, index) : undefined
    }
    {...restProps}
  />
);

export default CustomFlatList;
