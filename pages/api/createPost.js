import {excuteQuery} from '../../lib/db';

export default async function createPost (req, res) {
    try {

        const result = await excuteQuery({
            query: `INSERT INTO next_blog (title, content, created_at, updated_at) VALUES ('${req.body.title}', '${req.body.content}', '${req.body.created_at}', '${req.body.updated_at}');`
        });
        return await res.status(200).json(result);
    } catch (error) {
        return error
    }
}