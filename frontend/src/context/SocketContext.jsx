import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const initializeSocket = () => {
        const newSocket = io("https://chatapk.onrender.com", {
          query: {
            userId: authUser._id,
          },
        });

        newSocket.on("getOnlineUsers", (authUser) => {
          if (authUser) {
            setOnlineUsers(authUser);
          }
        });

        setSocket(newSocket);
      };

      initializeSocket();

      return () => {
        if (socket) {
          socket.close();
        }
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
