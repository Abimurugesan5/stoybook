import React from "react";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import PropTypes from 'prop-types';
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

  const onSearch = (value) => console.log(value);
  const Disables = () => (
    <Space direction="vertical">
      <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
      disabled
    />
     
    
      </Space>
  )
  export default Disables;
 