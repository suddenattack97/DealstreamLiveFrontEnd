import React from 'react';
import { Result, Button } from 'antd';
// import { Link } from 'react-router-dom'; // react-router-dom을 사용하는 경우

function NotFoundPage() {
  return (
    <Result
    status="404"
    title="404"
    subTitle="해당 페이지는 현재 준비 중 입니다."
    style={{padding:'140px 40px 200px'}}
    />
  );
}

export default NotFoundPage;