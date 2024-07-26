import { ViewContext } from './ViewContext';
import { ContainerViewContext } from './ContainerViewContext';
import { OpenChatWindowContext } from './OpenChatWindowContext';

const ContextProviders = ({ children, view, setView, containerView, setContainerView, openChatWindow, setOpenChatWindow }) => {
    return (
        <ViewContext.Provider value={{ view, setView }}>
            <ContainerViewContext.Provider value={{ containerView, setContainerView }}>
                <OpenChatWindowContext.Provider value={{ openChatWindow, setOpenChatWindow }}>
                    {children}
                </OpenChatWindowContext.Provider>
            </ContainerViewContext.Provider> 
        </ViewContext.Provider>
    );
}

export default ContextProviders;