import React from 'react';
import Homeherro from '../Pages/Home/Homeherro';
import Service from '../Pages/Home/Service';
import Giaythethao from '../Pages/Home/Giaythethao';
import Giaylike from '../Pages/Home/Giaylike';
import Ads from '../Pages/Home/ads';
import KhachHang from '../Pages/Home/khachhang';
import TinTuc from '../Pages/Home/tintuc';
import ChaoHe from '../Pages/Home/chaohe';

const Home = () => { 
  
 return (
    <div>  
     <Homeherro/>
     <Service/>
     <Giaythethao/>
     <Giaylike/>
     <Ads/>
     <ChaoHe/>
     <KhachHang/>
     <TinTuc/>
    </div>
  );
};

export default Home;
