import React, { useState, useEffect, createContext } from 'react';
import { Layout, Typography , Menu, Button } from 'antd';
import './App.css';

import NotFoundPage from './NotFound';
import DealStream from './DealStream/DealStream';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [selectedMenu, setSelectedMenu] = useState('1-1'); // 초기 상태 설정
  // 컴포넌트가 마운트될 때 데이터를 가져옴
  useEffect(() => {
  }, []);
  const renderContent = () => {
      switch (selectedMenu) {
          case '1-1':
            return <DealStream />;
          case '2-1':
            return <NotFoundPage />
          default:
              return <NotFoundPage />;
              // return null;
      }
  };
  // 각 대메뉴의 대표 서브메뉴 설정
  const handleSubMenuClick = (menuKey) => {
    switch (menuKey) {
        case '1':
            setSelectedMenu('1-1');
            break;
        case '2':
            setSelectedMenu('2-1');
            break;
        default:
            break;
    }
  };
  const menuItems = [
    {
      label: '실시간 할인 정보',
      key: '1',
      children: [
        { label: '실시간 할인 정보', key: '1-1' },
      ],
      onTitleClick: () => handleSubMenuClick('1'),
    },
    {
      label: '임시 메뉴',
      key: '2',
      children: [
        { label: '임시 메뉴', key: '2-1' },
      ],
      onTitleClick: () => handleSubMenuClick('2'),
    },
  ];
  return (
    <Layout>
      <Header style={{ backgroundColor: 'orange', height: '80px', padding: '20px 70px' }}>
        <Title style={{ color: 'white', margin: 0 ,display: 'inline'}}>실시간 할인 정보</Title>
      </Header>
      <Menu 
          className="custom-menu"
          theme="dark" 
          mode="horizontal" 
          defaultSelectedKeys={['1-1']}
          selectedKeys={[selectedMenu]} 
          style={{ paddingLeft:'65px' , lineHeight: '60px' , backgroundColor: 'rgb(255,165,0)'}}
          onSelect={({ key }) => setSelectedMenu(key)}
          items={menuItems}
        >
        </Menu>
      <Content style={{ margin: '30px 65px' }}>
        {/* 여기에 나머지 컨텐츠를 추가하세요 */}
        {renderContent()}
      </Content>
    </Layout>
  );
}
export default App;
