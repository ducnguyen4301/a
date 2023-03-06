import React from 'react';
import Header from '../../../components/Header';
import Icon from '../../../components/Icon';
import COLORS from '../../../theme/colors';

const Home = () => {
  return (
    <Header
      title="Thống kê"
      titlePosition="left"
      rightIcon={
        <Icon
          type={'fontAwesome5'}
          name={'home'}
          size={20}
          color={COLORS.white}
        />
      }
    />
  );
};

export default Home;
