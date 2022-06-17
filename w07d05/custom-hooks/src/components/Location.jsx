import useLocation from "../hooks/useLocation";

const Location = () => {
  const coords = useLocation();

  return (
    <div>
      <h2>Location Component</h2>
      <h2>Lat: {coords.lat}, Lon: {coords.lon}</h2>
    </div>
  );
};

export default Location;
