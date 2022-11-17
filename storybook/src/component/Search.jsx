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
  const SearchBar = () => (
    <Space direction="vertical">
      <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
     
    
      </Space>
  )
  export default SearchBar;
 


//   SearchBar.propTypes = {
//   value: PropTypes.string,
//   label: PropTypes.string,
//   required:PropTypes.string,
//   disabled:PropTypes.string,
//   placeholder: PropTypes.string,
//   validators: PropTypes.array,
//   type: PropTypes.string,
//   readOnly:PropTypes.string,
//   onChange: PropTypes.func.isRequired
// };
// SearchBar.defaultProps = {
//   value: '',
//   label: '',
//   placeholder: '',
//   type: 'text',
//   validators: []
//   };