import { useRef, useState } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const SearchBar = () => {
  const [addressInput, setAddreesInput] = useState<string | null>(null);
  const clickPoint = useRef();
  const { Search } = Input;

  const onSearch = (value: any) => {
    console.log(value);
    window.location.href = './Transactions/'+value;
  }

  return (
    <div>
      <div className="items-center px-4 flex justify-center">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
