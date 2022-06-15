import {useState} from 'react';

const Pizza = () => {
  // const [toppings, setToppings] = useState([]);
  // const [crust, setCrust] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crust: 'stuffed',
    sauce: 'tomato'
  });

  const [newTopping, setNewTopping] = useState('');

  const addNewTopping = () => {
    // toppings.push(newTopping);
    // setToppings((prevToppings) => {
    //   return [
    //     ...prevToppings,
    //     newTopping,
    //   ];
    // });

    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        toppings: [
          ...prevPizza.toppings,
          newTopping
        ]
      };
    });

    setNewTopping('');
  };

  const updateCrustType = (event) => {
    // setCrust(event.target.value);

    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        crust: event.target.value
      };
    });
  };

  const mappedToppings = pizza.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  return (
    <div>
      <h2>Create your own Pizza!!</h2>

      <div>
        <h2>Crust: {pizza.crust}</h2>
        <input 
          value={pizza.crust}
          onChange={updateCrustType}
        />
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => {setNewTopping(event.target.value)}}
        />
        <button onClick={addNewTopping}>Add to pizza</button>
      </div>

      {mappedToppings}
    </div>
  );
};

export default Pizza;
