import React, {ReactElement} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {FC} from 'react';

type RowProps = {
  children?: React.ReactNode;
  containtStyle?: ViewStyle | Array<ViewStyle>;
  start?: boolean;
  center?: boolean;
  between?: boolean;
  around?: boolean;
  end?: boolean;
};

const Row: FC<RowProps> = (props): ReactElement => {
  const {
    containtStyle = {},
    start = false,
    center = false,
    between = false,
    around = false,
    end = false,
  } = props;
  return (
    <View
      style={StyleSheet.flatten([
        styles.default,
        center && styles.center,
        start && styles.start,
        between && styles.between,
        around && styles.around,
        end && styles.end,
        containtStyle,
      ])}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  start: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  between: {
    justifyContent: 'space-between',
  },
  around: {
    justifyContent: 'space-around',
  },
  end: {
    justifyContent: 'flex-end',
  },
});

export default Row;
