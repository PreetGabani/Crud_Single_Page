import React from 'react'
import { Card } from '@mui/material'
import { Button, TextField, Checkbox } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { InsertData } from "../Redux/action/actionindex"
import { DeleteData } from "../Redux/action/actionindex"
import { UpdateData } from "../Redux/action/actionindex"
import { GetData } from "../Redux/action/actionindex"
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';


const Home = () => {

    const [insert, setInsert] = useState(
        {
            inTitle: "",
            inBody: "",
            inCheck: false
        }
    )

    const [update, setUpdate] = useState(
        {
            upId: "",
            upTitle: "",
            upBody: "",
            upCheck: false
        }
    )

    const dispatch = useDispatch();
    const Data = useSelector((state) => state.DataReducer.list);

    const [getTask, setGetTask] = useState(
        {
            getTaskId: ""
        }
    )
    const [deleteTask, setDeleteTask] = useState(
        {
            deleteTaskId: ""
        }
    )

    const handleInsertTitle = (e) => {
        setInsert(
            {
                ...insert,
                inTitle: e.target.value
            }
        )
    }

    // console.log(insert);

    const handleInsertBody = (e) => {
        setInsert(
            {
                ...insert,
                inBody: e.target.value
            }
        )
    }

    const handleInsertCheck = (e) => {
        setInsert({
            ...insert,
            inCheck: !insert.check
        })
    }

    const handleUpdateId = (e) => {
        setUpdate(
            {
                ...update,
                upId: e.target.value
            }
        )
    }

    const handleUpdateTitle = (e) => {
        setUpdate(
            {
                ...update,
                upTitle: e.target.value
            }
        )
    }

    const handleUpdateBody = (e) => {
        setUpdate(
            {
                ...update,
                upBody: e.target.value
            }
        )
    }

    const handleUpdateCheck = (e) => {
        setUpdate({
            ...update,
            upCheck: !update.check
        })
    }

    const handleGetId = (e) => {
        setGetTask({
            ...getTask,
            getTaskId: e.target.value
        })
    }

    const handleDeleteId = (e) => {
        setDeleteTask({
            ...deleteTask,
            deleteTaskId: e.target.value
        })
    }

    const handleInsertSubmit = (e) => {
        e.preventDefault()
        if (!insert.inTitle && !insert.inBody && !insert.inCheck) {
            toast.error("Enter all field in CREATE Task", {
                theme: 'colored',
                autoClose: 2000,
                hideProgressBar: true
            })
        } else {
            dispatch(InsertData(insert.inTitle, insert.inBody, insert.inCheck))
            setInsert({
                inTitle: "",
                inBody: "",
                inCheck: false
            })
            toast.success("Task Created Sucessfully", {
                theme: 'colored',
                autoClose: 2000,
                hideProgressBar: true
            })
        }

        console.log(insert);
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault()

        if (!update.upTitle && !update.upBody && !update.upCheck && !update.upId) {
            toast.error("Enter all field in UPDATE Task", {
                theme: 'colored',
                autoClose: 2000,
                hideProgressBar: true
            })
        } else {
            dispatch(UpdateData(update.upTitle, update.upBody, update.upCheck, update.upId))
            setUpdate({
                upId: "",
                upTitle: "",
                upBody: "",
                upCheck: false
            })
            toast.success("Task Updated Sucessfully", {
                theme: 'colored',
                autoClose: 2000,
                hideProgressBar: true
            })
        }
        console.log(update);
    }

    const handleGetTask = (e) => {
        e.preventDefault()
        if (!getTask.getTaskId) {
            toast.error("Enter GET Task Id", {
                theme: 'colored',
                autoClose: 2000,
                hideProgressBar: true
            })
        } else {
            dispatch(GetData(getTask.getTaskId))            
            setGetTask( {
                getTaskId: ""
            })
            toast.success("Task Get Sucessfully", {
                theme: 'colored',
                autoClose: 2000,
                hideProgressBar: true
            })
        }
        
        console.log(getTask);
    }

    const handleDeleteTask = (e) => {
        e.preventDefault()
        if (!deleteTask.deleteTaskId) {
            toast.error("Enter DELETE Task Id", {
                theme: 'colored',
                autoClose: 2000,
                hideProgressBar: true
            })
        } else {
            dispatch(DeleteData(deleteTask.deleteTaskId))
            setDeleteTask({
                deleteTaskId: ""
            })
            toast.success("Task Deleted Sucessfully", {
                theme: 'colored',
                autoClose: 2000,
                hideProgressBar: true
            })
        }
        console.log(deleteTask);
    }


    return (
        <>
            <div className="home">
                <div className='home_inner m-lg-3'>
                    <h3 className="fw-bold">Tasks:</h3>
                    <div className="row d-flex flex-wrap">
                        {
                            Data.map((data) => {
                                return (
                                    <div className='col-12 col-sm-6 col-md-4 col-xl-3 card_col_wrap'>
                                        <Card className="cardView text-white bg-dark shadow-lg">
                                            <div className="fw-bold">
                                                <h5> Title: {data.title}</h5>
                                            </div>
                                            <br />
                                            <div>
                                                ID: {data.id}
                                            </div>
                                            <br />
                                            <div>
                                                Body: {data.body}
                                            </div>
                                            <br />
                                            <div>
                                                Done: {data.check === true ? "Yes" : "No"}
                                            </div>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div>
                        <h5 className="mt-4">GET Task:</h5>
                        <Card className="getTask d-flex align-items-center shadow-lg">
                            <div className="d-flex align-items-center ms-2">
                                <span>Task ID:</span>
                                <form onSubmit={handleGetTask}>
                                    <TextField value={getTask.getTaskId} size="small" label="ID Number" type="number" className="ms-2" onChange={handleGetId} />
                                    <Button type='submit' variant="contained" className="ms-2 text-capitalize">Get Task</Button>
                                </form>
                            </div>
                        </Card>

                        <h5 className="mt-4">CREATE Task:</h5>
                        <Card className="createTask shadow-lg">
                            <form onSubmit={handleInsertSubmit}>
                                <div className='d-flex align-items-center justify-content-around'>
                                    <span>Task Title:</span>
                                    <TextField value={insert.inTitle} size="small" label="Task Title" type="text" id="title" name="title" onChange={handleInsertTitle} />
                                </div>
                                <div className='d-flex align-items-center justify-content-around mt-2'>
                                    <span>Task Body:</span>
                                    <TextField value={insert.inBody} size="small" label="Task Body" type="text" id="body" name="body" onChange={handleInsertBody} />
                                </div>
                                <div className='d-flex align-items-center justify-content-start ms-2 mt-2'>
                                    <span>Is the Task done?</span>
                                    <Checkbox checked={insert.inCheck} id="check" name="check" onChange={handleInsertCheck} />
                                </div>
                                <div className="ms-2 mt-2 text-capitalize">
                                    <Button type="submit" variant="contained" className="text-capitalize">Create Task</Button>
                                </div>
                            </form>
                        </Card>

                        <h5 className="mt-4">UPDATE Task:</h5>
                        <Card className="createTask shadow-lg">
                            <form onSubmit={handleUpdateSubmit}>
                                <div className='d-flex align-items-center justify-content-around'>
                                    <span>Task ID: &nbsp;&nbsp;&nbsp;</span>
                                    <TextField value={update.upId} size="small" label="Task ID" type="number" onChange={handleUpdateId} />
                                </div>
                                <div className='d-flex align-items-center justify-content-around mt-2'>
                                    <span>Task Title:</span>
                                    <TextField value={update.upTitle} size="small" label="Task Title" type="text" onChange={handleUpdateTitle} />
                                </div>
                                <div className='d-flex align-items-center justify-content-around mt-2'>
                                    <span>Task Body:</span>
                                    <TextField value={update.upBody} size="small" label="Task Body" type="text" onChange={handleUpdateBody} />
                                </div>
                                <div className='d-flex align-items-center justify-content-start ms-2 mt-2'>
                                    <span>Is the Task done?</span>
                                    <Checkbox checked={update.upCheck} id="check" name="check" onChange={handleUpdateCheck} />
                                </div>
                                <div className="ms-2 mt-2 text-capitalize">
                                    <Button type="submit" variant="contained" className="text-capitalize">Update Task</Button>
                                </div>
                            </form>
                        </Card>

                        <h5 className="mt-4">DELETE Task:</h5>
                        <Card className="deleteTask shadow-lg">
                            <div className="d-flex align-items-center ms-2">
                                <span>Task ID:</span>
                                <form onSubmit={handleDeleteTask}>
                                    <TextField size="small" value={deleteTask.deleteTaskId} label="ID Number" type="number" className="ms-2" onChange={handleDeleteId} />
                                    <Button type='submit' variant="contained" className="ms-2 text-capitalize">Delete Task</Button>
                                </form>
                            </div>
                        </Card>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home