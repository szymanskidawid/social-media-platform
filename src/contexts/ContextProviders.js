import { LightModeContext } from "./LightModeContext";
import { LoginViewContext } from "./LoginViewContext";
import { ContainerViewContext } from "./ContainerViewContext";
import { LoginStateContext } from "./LoginStateContext";
import { UserContext } from "./UserContext";
import { PeopleContext } from "./PeopleContext";
import { PostsContext } from "./PostsContext";
import { SelectedPersonIdContext } from "./SelectedPersonIdContext";
import { CommentsContext } from "./CommentsContext";
import { ChatsContext } from "./ChatsContext";

const ContextProviders = ({
  children,
  isLightMode,
  isLoggedIn,
  setIsLoggedIn,
  setIsLightMode,
  loginPageView,
  setLoginPageView,
  containerView,
  setContainerView,
  user,
  setUser,
  people,
  setPeople,
  posts,
  setPosts,
  selectedPersonId,
  setSelectedPersonId,
  comments,
  setComments,
  chats,
  setChats,
}) => {
  return (
    <LightModeContext.Provider value={{ isLightMode, setIsLightMode }}>
      <LoginStateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginViewContext.Provider value={{ loginPageView, setLoginPageView }}>
          <ContainerViewContext.Provider
            value={{ containerView, setContainerView }}
          >
            <UserContext.Provider value={{ user, setUser }}>
              <PeopleContext.Provider value={{ people, setPeople }}>
                <PostsContext.Provider value={{ posts, setPosts }}>
                  <SelectedPersonIdContext.Provider
                    value={{ selectedPersonId, setSelectedPersonId }}
                  >
                    <CommentsContext.Provider value={{ comments, setComments }}>
                      <ChatsContext.Provider value={{ chats, setChats }}>
                        {children}
                      </ChatsContext.Provider>
                    </CommentsContext.Provider>
                  </SelectedPersonIdContext.Provider>
                </PostsContext.Provider>
              </PeopleContext.Provider>
            </UserContext.Provider>
          </ContainerViewContext.Provider>
        </LoginViewContext.Provider>
      </LoginStateContext.Provider>
    </LightModeContext.Provider>
  );
};

export default ContextProviders;
