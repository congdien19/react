import React from "react";
import "./thanhvien.css";

function ThanhVien() {
  return (
    <div className="team-section">
      <h2>Thành Viên Trong Nhóm</h2>
      <p>Nhân viên trẻ nhiều nhiệt huyết</p>

      <div className="team-cards">
        <div className="team-card">
          <img src="/images/mobep.jpg" alt="Kỳ Văn Lân" />
          <h3>Đặng Công Diện</h3>
          <p>Quản lý MKT</p>
        </div>
        <div className="team-card">
          <img src="/images/phoenix.png" alt="Hoàng Thị Phượng" />
          <h3>Ngô Bá Chiến</h3>
          <p>Nhân viên bán hàng</p>
        </div>
        <div className="team-card">
          <img src="/images/dragon.png" alt="Nguyễn Văn Long" />
          <h3>Curry</h3>
          <p>Quản lý bán hàng</p>
        </div>
      </div>
    </div>
  );
}

export default ThanhVien;

