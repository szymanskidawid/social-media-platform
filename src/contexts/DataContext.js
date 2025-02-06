import { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [people, setPeople] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [chats, setChats] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (db) => {
    try {
      const response = await fetch(
        //`https://social-media-platform-backend-l5h4.onrender.com/${db}`
        `http://localhost:4000/${db}`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      try {
        const [
          peopleData,
          postsData,
          commentsData,
          chatsData,
          notificationsData,
        ] = await Promise.all([
          fetchData("people"),
          fetchData("posts"),
          fetchData("comments"),
          fetchData("chats"),
          fetchData("notifications"),
        ]);

        if (peopleData !== null) setPeople(peopleData);
        if (postsData !== null) setPosts(postsData);
        if (commentsData !== null) setComments(commentsData);
        if (chatsData !== null) setChats(chatsData);
        if (notificationsData !== null) setNotifications(notificationsData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        user,
        people,
        posts,
        comments,
        chats,
        notifications,
        loading,
        error,
        setUser,
        setPeople,
        setPosts,
        setComments,
        setChats,
        setNotifications,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
