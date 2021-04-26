import {excuteQuery} from '../../lib/db';

export default async function getPosts (_, res) {
    try {
        const results = await excuteQuery({
            query: 'SELECT * FROM `next_blog`;'
        });
        return await res.status(200).json(results)
    } catch (error) {
        console.log(error);
    }
}