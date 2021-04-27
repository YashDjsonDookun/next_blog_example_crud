import { excuteQuery } from "../../lib/db"

export default async function editPost(res, req){
    try {
        const result = await excuteQuery({
            query: ``
        });
    }
    catch (e){
        return e
    }
}