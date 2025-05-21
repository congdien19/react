import React from "react";
import "./topthoitrang.css";

const categories = [
  {
    id: 1,
    title: "Mũ Phớt Nam",
    count: "70 SẢN PHẨM",
    image: "/images/mu/mu1.jpg",
  },
  {
    id: 2,
    title: "Mũ Nồi Nam",
    count: "64 SẢN PHẨM",
    image: "/images/mu/m2.jpg",
  },
  {
    id: 3,
    title: "Mũ Lưỡi Trai",
    count: "75 SẢN PHẨM",
    image: "/images/mu/mu3.jpg",
  },
  {
    id: 4,
    title: "Mũ Snapback",
    count: "82 SẢN PHẨM",
    image: "/images/mu/mu4.jpg",
  },
  {
    id: 5,
    title: "Mũ Bucket",
    count: "49 SẢN PHẨM",
    image: "/images/mu/mu5.jpg",
  },
];

function TopThoiTrang() {
  return (
    <div className="topthoitrang-container">
      <h2>Shop Mũ Nón Thời Trang Sportsbook</h2>
      <div className="subtitle">DANH MỤC NỔI BẬT</div>
      <div className="category-list">
        {categories.map((item) => (
          <div className="category-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopThoiTrang;
