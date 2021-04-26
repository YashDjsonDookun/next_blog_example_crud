import {excuteQuery} from '../../lib/db';

export default async function deletePost (req, res){
    try{
        const result = await excuteQuery({
            query: `DELETE FROM next_blog WHERE id='${req.body.id}'`
        });
        return await res.status(200).json(result);
    }
    catch (e){
        return e
    }
}