export const FETCH_POSTS = 'fetch_posts';
export const SELECT_POST = 'select_post';

export function fetchPosts(){
	return {
		type: FETCH_POSTS
	};
}

export function selectPost(id, isSelected){
	return {
		type: SELECT_POST,
		payload: { id, isSelected}
	}
}