import { ViewContext } from './ViewContext'
import { ContainerViewContext } from './ContainerViewContext'

const ContextProviders = ({ children, view, setView, containerView, setContainerView }) => {
    return (
        <ViewContext.Provider value={{ view, setView }}>
            <ContainerViewContext.Provider value={{ containerView, setContainerView }}>
                {children}
            </ContainerViewContext.Provider> 
        </ViewContext.Provider>
    );
}

export default ContextProviders;