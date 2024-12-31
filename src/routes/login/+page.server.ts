import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async (event) => {
                const { cookies, request } = event;
                const data = await request.formData();
                const name = data.get('name') as string;
                if (!name) {
                    return {
                        error: 'username is missing'
                    }
                }
                console.log('Log in: ' + name);
                cookies.set('sessionid', name, { 
                    httpOnly: true,
                    path: '/',
                    secure: true,
                    sameSite: 'strict',
                    maxAge: 60 * 60 * 24
                });
                throw redirect(302, '/home')
	}
} satisfies Actions;