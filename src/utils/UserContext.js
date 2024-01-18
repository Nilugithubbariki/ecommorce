import React, { createContext, useState } from "react";
import ApplayOut from "../ApplayOut";
export const MultiContext = createContext();
const UserContext = () => {
  const data = {
    name: "Nilanchala Bariki",
  };
  const [userName, setUserName] = useState(data);

  return (
    <div>
      <MultiContext.Provider value={{ userName, setUserName }}>
        <ApplayOut />
      </MultiContext.Provider>
    </div>
  );
};

export default UserContext;
