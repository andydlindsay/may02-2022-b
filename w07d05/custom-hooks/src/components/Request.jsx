import useRequest from "../hooks/useRequest";

const Request = () => {
  const url = 'http://my-json-server.typicode.com/andydlindsay/chef-andy/recipes';

  const {loading, data} = useRequest(url);

  return (
    <div>
      <h2>Request Component</h2>

      { loading && <p>Spinner...</p> }
      { data && <p>Num recipes: {data.length}</p> }
    </div>
  );
};

export default Request;
