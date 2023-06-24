import { createContext, useState} from "react"
//import { useNavigate } from "react-router-dom"

const Context = createContext()

function ContextProvider(props) {
    const [currentPage, setCurrentPage] = useState(null)

    return (
        <Context.Provider value={{ currentPage, setCurrentPage}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
