import React from 'react';
import Homeherro from '../Pages/Home/Homeherro';
import Service from '../Pages/Home/Service';
import Giaythethao from '../Pages/Home/Giaythethao';
import Giaylike from '../Pages/Home/Giaylike';
import Ads from '../Pages/Home/ads';
import KhachHang from '../Pages/Home/khachhang';
import TinTuc from '../Pages/Home/tintuc';

const Home = () => { 
  
 return (
    <div>  
     <Homeherro/>
     <Service/>
     <Giaythethao/>
     <Giaylike/>
     <Ads/>
     <KhachHang/>
     <TinTuc/>
    </div>
  );
};

export default Home;
