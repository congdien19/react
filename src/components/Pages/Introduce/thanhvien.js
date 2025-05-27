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
        </div>
        <div className="team-card">
          <img src="/images/chien.jpg" alt="Hoàng Thị Phượng" />
          <h3>Ngô Bá Chiến</h3>
        </div>
      </div>
    </div>
  );
}

export default ThanhVien;

