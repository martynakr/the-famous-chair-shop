import { createContext, useState } from "react";

export const QuantityContext = createContext();


const QuantityProvider = ({children}) => {
    const[count, setCount] = useState(1)

    const data = {count, setCount}

    return (
        <QuantityContext.Provider value={data}>{children}</QuantityContext.Provider>
    )
}

export default QuantityProvider