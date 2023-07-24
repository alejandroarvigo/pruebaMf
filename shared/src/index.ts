import React, { useEffect, useState } from 'react';

interface apiRequestProps {
    action: 'get' | 'post' | 'delete',
    url: string
}

export const NameContextProvider = React.createContext<{ apiRequest: ({ action, url }: apiRequestProps) => Promise<any> | null }>({ apiRequest: null });

// export const NameContextProvider = React.createContext({
//     apiRequest: async ({ action, url }) => {
//         try {
//             const response = await fetch(url, {
//                 method: action
//             });
//             if (response.ok) {
//                 const data = await response.json();
//                 return data;
//             }
//         } catch (error) {
//             return Promise.reject(error);
//         }
//     },
// });

// export interface User { 
//     string: string
// }
