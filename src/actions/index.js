import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";
export const FETCH_POST = "fetch_post";
export const DELETE_POST = "delete_post";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = `?key=poiasdasdaihndlads`;

export async function fetchPosts() {
    const request = await axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export async function createPost(values, callback) {
    const request = await axios.post(`${ROOT_URL}/posts${API_KEY}`, values);
    callback();
    return {
        type: CREATE_POST,
        payload: request
    }
}

export async function fetchPost(id) {
    const request = await axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export async function deletePost(id, callback) {
    await axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
    callback();
    return  {
        type: DELETE_POST,
        payload: id
    }
}