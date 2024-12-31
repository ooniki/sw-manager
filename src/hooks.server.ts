import type { Handle } from "@sveltejs/kit";

const handle: Handle = async({ event, resolve}) => {
    const { cookies, request } = event;
    const { headers } = request;
    const sessionid = cookies.get('sessionid')

    console.log('sessionsID');
    if (sessionid) {
        const sessionUser = {
            id: sessionid
        }
        event.locals.user = sessionUser;
    }
    resolve(event)
}