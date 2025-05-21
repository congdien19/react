import React from "react";
import "./luoitrai.css";

const caps = [
  {
    id: 1,
    img: "/images/mu/cap1.jpg",
    title: "Mũ Lưỡi Trai Đen Trơn Classic Khóa Đồng Cao Cấp Cho Nam và Nữ",
    oldPrice: "250.000₫",
    price: "145.000₫",
    discount: "-42%",
  },
  {
    id: 2,
    img: "/images/mu/cap2.jpg",
    title: "Mũ Lưỡi Trai Chóp Vuông Classic Vải Cotton Cao Cấp",
    oldPrice: "250.000₫",
    price: "165.000₫",
    discount: "-34%",
  },
  {
    id: 3,
    img: "/images/mu/cap3.jpg",
    title: "Mũ Lưỡi Trai Vành Ngắn Phong Cách Hàn Quốc Cho Nam, Nữ",
    oldPrice: "200.000₫",
    price: "135.000₫",
    discount: "-33%",
  },
  {
    id: 4,
    img: "/images/mu/cap4.jpg",
    title: "Mũ Lưỡi Trai Nam Hãng Hiệu JEEP Chính Hãng M194",
    oldPrice: "450.000₫",
    price: "350.000₫",
    discount: "-22%",
  },
  {
    id: 5,
    img: "/images/mu/cap5.jpg",
    title: "Mũ Lưỡi Trai Nhung Classic Khóa Đồng Cao Cấp",
    oldPrice: "215.000₫",
    price: "165.000₫",
    discount: "-23%",
  },
  {
    id: 6,
    img: "/images/mu/cap6.jpg",
    title: "Mũ Golf Trơn Màu Đen, Trắng M35 Lưỡi Dài Vải Cotton Cao Cấp",
    oldPrice: "205.000₫",
    price: "157.000₫",
    discount: "-23%",
  },
  {
    id: 7,
    img: "/images/mu/cap7.jpg",
    title: "Mũ Lưỡi Trai Force, Nón Kết Màu Đen Vải Cotton Cao Cấp",
    oldPrice: "185.000₫",
    price: "147.000₫",
    discount: "-21%",
  },
  {
    id: 8,
    img: "/images/mu/cap8.jpg",
    title: "Mũ Lưỡi Trai Trắng Trơn Classic Cap Cao Cấp",
    oldPrice: "220.000₫",
    price: "145.000₫",
    discount: "-34%",
  },
];

function LuoiTrai() {
  return (
    <div className="luoitrai-container">
      <h2>Mũ Lưỡi Trai</h2>
      <div className="breadcrumbs">TRANG CHỦ / <strong>MŨ LƯỠI TRAI</strong></div>
      <div className="caps-grid">
        {caps.map((cap) => (
          <div className="cap-item" key={cap.id}>
            <div className="discount">{cap.discount}</div>
            <img src={cap.img} alt={cap.title} />
            <div className="cap-title">{cap.title}</div>
            <div className="cap-price">
              <span className="old-price">{cap.oldPrice}</span>
              <span className="new-price">{cap.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LuoiTrai;
