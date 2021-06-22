import { createContext, useContext, useReducer } from "react";

export const WatchlistContext = createContext();

function watchlistReducer(state,action) {
    switch (action.type) {

        case "ADD_TO_WATCHLIST":
            return {
                ...state,
                watchlist: action.payload
            }
        
        case "REMOVE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(item => item._id !== action.payload )
        }

        case "SAVE_WATCHLIST_ID":
            return {
                ...state,
                watchlistId: action.payload
            }

    
        default:
            return state;
    }

}


const initialState = {
    watchlistId: null,
    watchlist: []
}

export function WatchlistProvider({children}) {

    const [state , dispatchWatchlist] = useReducer(watchlistReducer, initialState)

    return (
        <WatchlistContext.Provider value={{...state, dispatchWatchlist}} >
            {children}
        </WatchlistContext.Provider>
    )
}

export function useWatchlistContext() {
    return useContext(WatchlistContext)
}