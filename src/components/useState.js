import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [items, setItems] = useState([]);
  return (
    <>
      <div>Hi</div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Click Me {count}
      </button>
      <br />
      <br />
      <div>First Name is: {name.firstName}</div>
      <div>Last Name is: {name.lastName}</div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => {
            setName({ ...name, firstName: e.target.value });
          }}
        ></input>
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => {
            setName({ ...name, lastName: e.target.value });
          }}
        ></input>
        <button onClick={() => setName({ name: "" })}>Clear</button>
        <br />
      </form>
      <br />
      <div>
        <button
          onClick={(e) => {
            setItems([
              ...items,
              { id: items.length, value: Math.floor(Math.random() * 10) }
            ]);
          }}
        >
          Add Item
        </button>
        <ul>
          {items.map((item) => (
            <li key={item.id}> {item.value}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseState;
