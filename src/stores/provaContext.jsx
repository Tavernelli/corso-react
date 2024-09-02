import { createContext, useReducer, useState, useEffect } from "react";

// Creazione del contesto
export const provaContext = createContext({});

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return {
        name: "",
        email: "",
      };
    default:
      return state;
  }
};

export const ProvaContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [cities, setCities] = useState([
    {
      id: 0,
      name: "Roma",
      descrizione: "Roma",
      imgURL:
        "https://images.unsplash.com/photo-1529154036614-a60975f5c760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tYXxlbnwwfHwwfHx8MA%3D%3D",
      isVisited: false,
    },
    {
      id: 1,
      name: "Parigi",
      descrizione: "Parigi",
      imgURL:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlnaXxlbnwwfHwwfHx8MA%3D%3D",
      isVisited: false,
    },
    {
      id: 2,
      name: "Tokio",
      descrizione: "Tokio",
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYyyy92DfnVa7FBSUzNeReJoDn8KREBlsjw&s",
      isVisited: false,
    },
  ]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    name: "",
    email: "",
  });

  const handleFieldChange = (field, value) => {
    dispatchFormState({ type: "CHANGE_FIELD", field, value });
  };

  const resetForm = () => {
    dispatchFormState({ type: "RESET_FORM" });
  };

  const addCity = (city) => {
    setCities((prevValues) => [...prevValues, city]);
  };

  // Effetti per fetch API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((response) => response.status)
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/1`, {
      method: "PUT",
      body: JSON.stringify({}),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <provaContext.Provider
      value={{
        count,
        setCount,
        data,
        cities,
        addCity,
        formState,
        handleFieldChange,
        resetForm,
      }}
    >
      {children}
    </provaContext.Provider>
  );
};


//gestisce gli stati da passare ai figli senza le props