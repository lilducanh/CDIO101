import React, { useState } from 'react';

function test() {
  // Khai báo một state để lưu trữ dữ liệu
  const [data, setData] = useState('');

  // Hàm xử lý khi người dùng thay đổi giá trị input
  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      {/* Input để nhập dữ liệu */}
      <input type="text" value={data} onChange={handleChange} />

      {/* Hiển thị dữ liệu đã nhập */}
      <p>Dữ liệu đã nhập: {data}</p>
    </div>
  );
}

export default test;