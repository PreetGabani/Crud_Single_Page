const initialData = {
    list: []
}


const DataReducer = (state = initialData, action) => {
    switch (action.type) {
        case "INSERT_DATA":
            const { id, title, body, check } = action.payload;
            return {
                ...state,
                list: [...state.list,
                {
                    id: id,
                    title: title,
                    body: body,
                    check: check
                }
                ]
            }

        case "DELETE_DATA":
        const newList = state.list.filter((item) => item.id !== action.payload)

        return {
            list: newList
        }

        case "UPDATE_DATA":
            const updateData = state.list.map((item) => item.id === action.payload.id ? action.payload : item)
            return {
                list: updateData
            }

        case "GET_DATA":
            const GetList = state.list.filter((item) => item.id == action.payload)

        return {
            list: GetList
        }
        
        default: return state;
    }
}

export default DataReducer;