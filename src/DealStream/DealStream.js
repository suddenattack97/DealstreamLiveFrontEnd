import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
const NavigationBar = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>실시간 할인 정보</Breadcrumb.Item>
    </Breadcrumb>
  );
}
function DealStream() {
    useEffect(() => {
      }, []); // 빈 배열을 전달하여 마운트 시에만 실행되도록 설정
    
    return (
        <div>
            <NavigationBar />
            {/* 컴포넌트 */}
        </div>
    );
}
export default DealStream;