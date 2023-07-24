import { NameContextProvider } from 'shared-context_shared-library';
import React, { useEffect, useState } from 'react';

const Welcome: React.FC = () => {
  const [data, setData] = useState<{ userId: string, id: string, title: string, completed: string }>()
  const { apiRequest } = React.useContext(NameContextProvider);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiRequest({ action: 'get', url: "https://jsonplaceholder.typicode.com/todos/1" });
        setData(res);
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  return <p>{data?.title}</p>;
};

export default Welcome;