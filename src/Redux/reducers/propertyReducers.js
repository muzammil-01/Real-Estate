import {
    ADD_PROPERTY_REQUEST,
    ADD_PROPERTY_SUCCESS,
    ADD_PROPERTY_FAIL,
    LIST_PROPERTY_REQUEST,
    LIST_PROPERTY_SUCCESS,
    LIST_PROPERTY_FAIL,
    PROPERTY_DETAILS_REQUEST,
    PROPERTY_DETAILS_SUCCESS,
    PROPERTY_DETAILS_FAIL,
    LIST_USER_SPECIFIC_PROPERTY_REQUEST,
    LIST_USER_SPECIFIC_PROPERTY_SUCCESS,
    LIST_USER_SPECIFIC_PROPERTY_FAIL
} from '../constants/propertyConstants'


export const addPropertyReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PROPERTY_REQUEST:
            return { loading: true }
        case ADD_PROPERTY_SUCCESS:
            return { loading: false, propertyData: action.payload }
        case ADD_PROPERTY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const allPropertiesReducer = (state = {}, action) => {
    switch (action.type) {
        case LIST_PROPERTY_REQUEST:
            return { loading: true }
        case LIST_PROPERTY_SUCCESS:
            return { loading: false, propertyData: action.payload }
        case LIST_PROPERTY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const userSpecificPropertiesReducer = (state = {}, action) => {
    switch (action.type) {
        case LIST_USER_SPECIFIC_PROPERTY_REQUEST:
            return { loading: true }
        case LIST_USER_SPECIFIC_PROPERTY_SUCCESS:
            return { loading: false, propertyData: action.payload }
        case LIST_USER_SPECIFIC_PROPERTY_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const propertyDetailsReducer = (
    state = {}, action) => {
    switch (action.type) {
        case PROPERTY_DETAILS_REQUEST:
            return { loading: true }
        case PROPERTY_DETAILS_SUCCESS:
            return { loading: false, property: action.payload }
        case PROPERTY_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}