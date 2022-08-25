import {
    ACCOUNT_CONNECT_SUCCESS,
    ACCOUNT_CONNECT_FAIL,
    GET_SIGNER_SUCCESS,
    GET_SIGNER_FAIL,
    SELLER_WALLET_AND_CLONE_ADDRESS_SUCCESS,
    SELLER_WALLET_AND_CLONE_ADDRESS_FAIL,
} from '../constants/walletConstants'


export const walletConnect = (state = {}, action) => {
    switch (action.type) {
        case ACCOUNT_CONNECT_SUCCESS:
            return { walletAddress: action.payload }
        case ACCOUNT_CONNECT_FAIL:
            return { walletAddress: action.payload }
        default:
            return state
    }
}

// export const sellerClone = (state = {}, action) => {
//     switch (action.type) {
//         case SELLER_WALLET_AND_CLONE_ADDRESS_SUCCESS:
//             return { cloneInfo: action.payload }
//         case SELLER_WALLET_AND_CLONE_ADDRESS_FAIL:
//             return { error: action.payload }
//         default:
//             return state
//     }
// }