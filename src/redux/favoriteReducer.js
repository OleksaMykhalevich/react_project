import { omit } from 'lodash'

export const favoriteReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_FAVORITE':
            return {
                ...state,
                [action.id]: state[action.id] || 0,
            }
        case 'REMOVE_PRODUCT_FROM_FAVORITE':
            return omit(state, action.id)

        default:
            return state
    }
}
