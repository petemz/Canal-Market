import { createContext, useState} from "react"

const Context = createContext()

function ContextProvider(props) {
    const [currentPage, setCurrentPage] = useState(null)
    
    const [isModal, setIsModal] = useState(false)
    const [isNav, setIsNav] = useState(false)

    return (
        <Context.Provider value={{ currentPage, setCurrentPage, isModal, setIsModal, isNav, setIsNav}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
