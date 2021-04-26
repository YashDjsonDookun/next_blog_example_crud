import {useEffect, useState} from 'react';

export default function Posts({sharedState}){

	const editPost = async event =>{
		event.preventDefault();
	}

	const deletePost = async event =>{
		event.preventDefault();
		const res = await fetch('/api/deletePost', {
			body: JSON.stringify({
				id: event.target.id
			}),
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			method: 'POST'
		});
		if (res.status == 200) {
			let CPY_posts = (posts.filter((post)=> {return post.id != event.target.id}))
			setPosts(CPY_posts)
		}
	}

	const [posts, setPosts] = useState([]);
	useEffect(async () => {
		const result = await fetch('/api/getPosts');
		const data = await result.json();
		if (sharedState.length > 0){
			data.push(sharedState)
		}
		setPosts(data)
	}, [sharedState]);

	if (!posts){
		return (
			<div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
				<img className="object-cover w-full h-56" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1dEEf5PYZrP6RVJJxcP7hcKPzYPpDS6KrQ&usqp=CAU" alt="avatar"/>
				<div className="py-5 text-center">
					<h2 className="text-sm text-gray-700 dark:text-gray-200">Wait Bitch.. we have an issue!</h2>
				</div>
			</div>
		);
	}
	return (
		<div id="Posts" className="flex items-center justify-center flex-wrap pt-2 px-2 bg-gray-700">
			{posts?.map((post) =>{
				return (
					<div id={post.id} key={post.id} className="max-w-lg w-full rounded-lg bg-gray-500 m-1 shadow-lg p-4">
						<h3 className="font-semibold text-lg text-gray-800 tracking-wide">{post.title}</h3>
						<p className="text-gray-100 my-1">
							{post.content}
						</p>
						<h4>Created:</h4>
						<p className="text-gray-300 my-1">
							{post.created_at}
						</p>
						<h4>Last Modified:</h4>
						<p className="text-gray-300 my-1">
							{post.updated_at}
						</p>
						<div className="flex justify-end">
							<button onClick={editPost} id={post.id} className="uppercase font-semibold tracking-wide bg-blue-100 text-blue-700 px-4 py-2 rounded-lg mt-2 mx-1 my-1 focus:outline-none hover:bg-blue-200">Edit Post</button>
							<button onClick={deletePost} id={post.id} className="uppercase font-semibold tracking-wide bg-red-500 text-blue-100 px-4 py-2 rounded-lg mt-2 mx-1 my-1 focus:outline-none hover:bg-red-600 hover:text-white">Delete Post</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
