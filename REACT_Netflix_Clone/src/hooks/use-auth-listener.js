import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';



export default function useAuthListener(){
    const [user, setUser]  = useState(
		// check to see if there is a user in localstorage object and parse
        JSON.parse(localStorage.getItem('authUser'))
        );
		//Check is a user is auth
        const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		const listener = firebase.auth().onAuthStateChanged((authUser) => {
			if (authUser) {
				localStorage.setItem('authUser', JSON.stringify(authUser));
				setUser(authUser)
			} else {
				localStorage.removeItem('authUser');
				setUser(null);
			}
		});

		return () => listener();
	}, []);

	return { user };
}
