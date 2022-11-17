import { Segmented } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

 const SegmentBar=()=>  (
    <>
  <Segmented
  style={{backgroundColor:"#F3F3F3",width:"Hug (177px)"}}
    options={[
      {
        label: 'Pipeline',
        value: 'Pipeline',
        icon: <BarsOutlined />,
      },
      {
        label: 'Table',
        value: 'Table',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
  <br></br>

  <Segmented
  style={{backgroundColor:"#F3F3F3",width:"Hug (177px)"}}
    options={[
    
      {
        label: 'Pipeline',
        value: 'Pipeline',
        icon: <BarsOutlined />,
      },
      {
        label: 'Table',
        value: 'Table',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
  <br></br>
  

  </>
);
export default SegmentBar