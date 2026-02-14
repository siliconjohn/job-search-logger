import { Flex, Layout } from 'antd';
import ActivityLog from '../../ActivityLog.tsx'
const { Header, Content } = Layout;
import './App.css'

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#455f50',
};

const contentStyle: React.CSSProperties = {
   minHeight: 120,
  lineHeight: '50px',
  color: '#000',
  padding: '50px',
  overflow: 'scroll',
  backgroundColor: '#00542317',
};
  
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
};

const App: React.FC = () => (
  <Flex gap="middle" wrap>
	    <Layout style={layoutStyle}>
        <Header style={headerStyle}>Job Seek Log</Header>
        <Content style={contentStyle}> 
        <ActivityLog name="Job Seek Log"/>
		  </Content> 
    </Layout>
  </Flex>
);
   
export default App
