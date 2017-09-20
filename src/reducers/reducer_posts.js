import {FETCH_POSTS} from "../actions";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
                return action.payload.data.reduce((all, item)=>{
                all[item.id] = item;
                return all;
            }, {});
        default: return state;
    }
}