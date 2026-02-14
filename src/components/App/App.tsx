import { Flex, Layout, ConfigProvider, theme  } from 'antd';
import ActivityLog from '../ActivityLog/ActivityLog';
const { Header, Content } = Layout;
import './App.css'

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  // color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  // backgroundColor: '#455f50',
};

const contentStyle: React.CSSProperties = {
   minHeight: 120,
  lineHeight: '50px',
  //color: '#000',
  padding: '50px',
  overflow: 'scroll',
 // backgroundColor: '#00542317',
};
  
const layoutStyle = {
  
  //overflow: 'hidden',
  width: '100vw',
  height: '100vh',
};

const App: React.FC = () => (
  <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,     // or darkAlgorithm / compactAlgorithm
        token: {
          colorPrimary: '#52c41a',          // Polar Green main color
          colorSuccess: '#2d6d0d',          // usually keep success = primary for green themes

          colorInfo: '#1677ff',             // keep blue for links/info
          colorWarning: '#faad14',
          colorError: '#ff4d4f', 
          colorPrimaryHover: '#73d13d',     // green-5
          colorPrimaryActive: '#389e0d',    // green-7
          borderRadius: 1,
      }
    }}
  >

    <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>Job Seek Log</Header>
          <Content style={contentStyle}> 
          <ActivityLog name="Job Seek Log"/>
        </Content> 
      </Layout>
    </Flex>
  </ConfigProvider>
);
   
export default App
