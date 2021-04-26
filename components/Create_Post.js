import moment from 'moment';

export default function Create_Post({sharedState, setSharedState}){
    const createPost = async event => {
        event.preventDefault();
        const post_details = {
            title: event.target.input_post_title.value,
            content: event.target.input_post_content.value,
            created_at: moment().format('YYYY-MM-DD h:mm:ss'),
            updated_at: moment().format('YYYY-MM-DD h:mm:ss')
        }
        const res = await fetch('/api/createPost', {
            body: JSON.stringify(post_details),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST'
        });
        if (res.status == 200){
            event.target.reset();
            setSharedState(post_details)
        }
    };
        return (
        <div id="CreatePost" className="flex items-center justify-center bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <form className="mt-8 space-y-6" onSubmit={createPost}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                                id="input_post_title"
                                name="input_post_title"
                                type="text"
                                required
                                placeholder="Post Title"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <div>
                            <input
                                id="input_post_content"
                                name="input_post_content"
                                type="text"
                                required
                                placeholder="Post Content"
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border mt-2 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            id="btn_create_post"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}