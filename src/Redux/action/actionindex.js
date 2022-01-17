export const InsertData = (title, body, check) => {
    return {
        type: "INSERT_DATA",
        payload: {
            id: new Date().getTime().toString(),
            title:title,
            body:body,
            check:check
        }
    }
}

export const DeleteData =(id)=>{
    return {
        type: "DELETE_DATA",
        payload: id
    }
}

export const UpdateData=(title, body, check,id)=>{
    return {
        type: "UPDATE_DATA",
        payload: {
            title: title,
            body: body,
            check: check,
            id:id
        }
    }
}

export const GetData =(id)=>{
    return {
        type: "GET_DATA",
        payload: id
    }
}