import React from "react";
import "./gioithieu.css";

function GioiThieu() {
  return (
    <div className="gioithieu-wrapper">
      {/* Tiêu đề + breadcrumb */}
      <div className="gioithieu-header">
        <div className="gioithieu-header-inner">
          <h2>Giới Thiệu</h2>
          <div className="gioithieu-breadcrumb">
            <a href="/">Trang chủ</a> &gt; <span>Giới thiệu</span>
          </div>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="gioithieu-content">
        <div className="gioithieu-image">
          <img src="/images/540.jpg" alt="Giới thiệu" />
        </div>
        <div className="gioithieu-text">
          <h3>Chúng Tôi Là Ai?</h3>
          <p>
            GMO-Z.com RUNSYSTEM tiền thân là Công ty RUNSYSTEM hoạt động trong các lĩnh vực sản xuất phần mềm, cung cấp các giải pháp và dịch vụ CNTT tại thị trường Việt Nam và Nhật Bản. Với phương châm làm việc “We work for your smile”, GMO-Z.com RUNSYSTEM thường xuyên cải tiến môi trường làm việc, cải tiến kỹ thuật, quy trình để cung cấp sản phẩm chất lượng toàn cầu nhằm phát huy tối đa hiệu quả công việc, mang lại giá trị to lớn cho khách hàng cũng các thành viên của GMO-Z.com RUNSYSTEM.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GioiThieu;
