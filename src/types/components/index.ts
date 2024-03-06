import {ReactElement, ReactNode} from 'react';
import {FlatListProps, StyleProp, ViewStyle} from 'react-native';

// FlatList
export interface ICustomFlatListProps<ItemT>
  extends Omit<FlatListProps<ItemT>, 'renderItem' | 'data' | 'keyExtractor'> {
  data: ItemT[];
  renderItem: (item: ItemT, index: number) => ReactElement | null;
  keyExtractor: (item: ItemT, index: number) => string;
}

// Layout
export interface LayoutPropsType {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
