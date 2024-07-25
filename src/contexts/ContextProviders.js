import { ViewContext } from './ViewContext'

const ContextProviders = ({ children, view, setView}) => {
    return (
        <ViewContext.Provider value={{ view, setView }}>
            {children}
        </ViewContext.Provider>
    );
}

export default ContextProviders;