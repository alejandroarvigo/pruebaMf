import axios from 'axios';
import { useCallback, useState } from 'react';

interface apiRequestProps {
    action: 'get' | 'post' | 'delete',
    url: string
}

const fetchHook = () => {

    const apiRequest = async ({ action = 'get', url }: apiRequestProps) => {
        try {
            const response = await axios({
                method: action,
                url: url,
                headers: {
                    Authorization: 'Bearer YOUR_TOKEN_HERE_FROM_SHELL',
                },
            });
            return response.data;
        } catch (error) {
            return error;
        }
    };

    return {
        apiRequest
    };
}

export default fetchHook;