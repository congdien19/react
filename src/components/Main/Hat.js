import React from 'react';
import Herrohat from '../Pages/Hat/Herrohat';
import LuoiTrai from '../Pages/Hat/luoitrai';
import TopThoiTrang from '../Pages/Hat/topthoitrang';
import TopBanChay from '../Pages/Hat/topbanchay';
import NetDep from '../Pages/Hat/netdep';

const Hat = () => {
  return (
    <div>
      <Herrohat />
      <TopThoiTrang />
      <TopBanChay />
      <LuoiTrai />
      <NetDep />
    </div>
  );
};

export default Hat;