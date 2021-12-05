import React, { createContext, useReducer, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthContextData {
    path: string;
}

export const DomainContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

export const AuthProvider = ({ children }) => {
    const [path, setPath] = useState<string | null>(null);

    useEffect(() => {
        async function loadStoragedData() {
            const storagedPath = await AsyncStorage.getItem('@RCPath:path');

            if (storagedPath) {
                setPath(JSON.parse(storagedPath));
            }
        }
        loadStoragedData();
    }, []);

    async function setAddress() {
        // const response = await auth.signIn(condominio, digito, usuario, senha);

        // if (response.user) {
        //     setUser(response.user);

        //     await AsyncStorage.setItem('@RCAuth:user', JSON.stringify(response.user));

        //     return { success: true, response: '' };
        // } else {
        //     return { success: false, response: response.toString() };
        // }
    }

    return (
        <DomainContext.Provider value={{ path }}>
            {children}
        </DomainContext.Provider>
    );
}


