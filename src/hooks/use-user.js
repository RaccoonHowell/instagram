import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId } from '../services/firebase';
import { getUserByUserId } from'../services/firebase';

export default function useUser() {
    const [activeUser, setActiveUser] = useState({});
    const { user } = useContext(UserContext);

    useEffect(() => {
        async function getUserObjByUserId(userId) {
          const [user] = await getUserByUserId(userId);
          setActiveUser(user || {});
        }

        if (userId) {
            getUserObjByUserId(userId);
        }
    }, [userId]);
      
    return { user: activeUser };
}