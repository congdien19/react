import React from 'react';
import './tintuc.css';

const blogPosts = [
  {
    id: 1,
    image: '/images/khach1.jpg',
    date: '22 Th6',
    title: 'Giới trẻ Việt có mới đi đâu cả rồi phí',
    description: 'Trên suy nghĩ trẻ chúng tôi ngày nay xuất hiện một chữ đáng lo âu. Mới bây giờ, mới bây giờ chúng tôi mới chốt đơn, mới chốt đơn, công 22 triệu đã thành nụ hoa kỳ diệu, giờ mua đôi này chưa mà người...'
  },
  {
    id: 2,
    image: '/images/khach2.jpg',
    date: '22 Th6',
    title: 'Chọn giày đẹp lúc nào cũng vừa ý chân',
    description: 'Mỗi giày hay giờ giày không ở trên công quả tất cả. Hồi bây giờ, hồi cả bao giờ đi là kể đi giày ý chúng, đôi giày giới công ý rồi chợ chém cả để thời gian tốt nhưng chúng ta bên trên đã tạo khả năm...'
  },
  {
    id: 3,
    image: '/images/khach3.jpg',
    date: '22 Th6',
    title: 'Thêm 5 đôi sneaker màu ngọt lịm',
    description: 'Mới bây giờ mới sneaker màu hồng để vừa thích chính tốt của bên phạm trên cảnh mới giày mới chốt đơn cả chính là mới của bao đang đơn kiếm. Không giới thiệu phạm mình trên. Lúc mới là giờ mới chốt...'
  }
];

const TinTuc = () => {
  return (
    <div className="blog-container">
      <h2>Blog Tin Tức</h2>
      <p className="blog-subtitle">Sportsbook Cập nhật thường xuyên những tin tức về giày sneaker</p>
      
      <div className="blog-grid">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <div className="date-badge">{post.date}</div>
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="view-more">
        <button>XEM THÊM TIN TỨC</button>
      </div>
    </div>
  );
};

export default TinTuc;