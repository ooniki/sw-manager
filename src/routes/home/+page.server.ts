import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (event) => {
    const user = event.locals.user
    if (!user) {
        throw(redirect(302, '/login'))
    }

    return {
        user: user
    }
}