import React from 'react'
import { Card } from '@mui/material'
import { Button, TextField, Checkbox } from '@mui/material'
import { useState } from 'react'

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
            upId:"",
            upTitle: "",
            upBody: "",
            upCheck: false
        }
    )

    const [getTask,setGetTask] = useState(
        {
            getTaskId:""
        }
    )
    const [deleteTask,setDeleteTask] = useState(
        {
            deleteTaskId:""
        }
    )

    const handleInsertTitle = (e) => {
        setInsert(
            {...insert,
            inTitle: e.target.value}
        )
    }

    // console.log(insert);

    const handleInsertBody = (e) => {
        setInsert(
            {...insert,
            inBody: e.target.value}
        )
    }

    const handleInsertCheck = (e) => {
        setInsert({
            ...insert,
            inCheck:!insert.check
        })
    }

    const handleUpdateId = (e) => {
        setUpdate(
            {...update,
            upId: e.target.value}
        )
    }

    const handleUpdateTitle = (e) => {
        setUpdate(
            {...update,
            upTitle: e.target.value}
        )
    }

    const handleUpdateBody = (e) => {
        setUpdate(
            {...update,
            upBody: e.target.value}
        )
    }

    const handleUpdateCheck = (e) => {
        setUpdate({
            ...update,
            upCheck:!update.check
        })
    }

    const handleGetId = (e) => {
        setGetTask({
            ...getTask,
            getTaskId:e.target.value
        })
    }

    const handleDeleteId = (e) => {
        setDeleteTask({
            ...deleteTask,
            deleteTaskId:e.target.value
        })
    }

    const handleInsertSubmit = (e) =>{
        e.preventDefault()
        console.log(insert);
    }

    const handleUpdateSubmit = (e) =>{
        e.preventDefault()
        console.log(update);
    }

    const handleGetTask = (e) =>{
        e.preventDefault()
        console.log(getTask);
    }

    const handleDeleteTask = (e) =>{
        e.preventDefault()
        console.log(deleteTask);
    }


    return (
        <>
            <div className="home">
                <div className='home_inner m-lg-3'>
                    <h3 className="fw-bold">Tasks:</h3>
                    <div className="row d-flex flex-wrap">
                        <div className='col-12 col-sm-6 col-md-4 col-xl-3 card_col_wrap'>
                            <Card className="cardView text-white bg-dark shadow-lg">
                                <div className="fw-bold">
                                    Title: First Tasks
                                </div>
                                <br />
                                <div>
                                    ID: 0
                                </div>
                                <br />
                                <div>
                                    Body: First Tasks Body
                                </div>
                                <br />
                                <div>
                                    Done: No
                                </div>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-xl-3 card_col_wrap'>
                            <Card className="cardView text-white bg-dark shadow-lg">
                                <div className="fw-bold">
                                    Title: First Tasks
                                </div>
                                <br />
                                <div>
                                    ID: 0
                                </div>
                                <br />
                                <div>
                                    Body: First Tasks Body
                                </div>
                                <br />
                                <div>
                                    Done: No
                                </div>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-xl-3 card_col_wrap'>
                            <Card className="cardView text-white bg-dark shadow-lg">
                                <div className="fw-bold">
                                    Title: First Tasks
                                </div>
                                <br />
                                <div>
                                    ID: 0
                                </div>
                                <br />
                                <div>
                                    Body: First Tasks Body
                                </div>
                                <br />
                                <div>
                                    Done: No
                                </div>
                            </Card>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-xl-3 card_col_wrap'>
                            <Card className="cardView text-white bg-dark shadow-lg">
                                <div className="fw-bold">
                                    Title: First Tasks
                                </div>
                                <br />
                                <div>
                                    ID: 0
                                </div>
                                <br />
                                <div>
                                    Body: First Tasks Body
                                </div>
                                <br />
                                <div>
                                    Done: No
                                </div>
                            </Card>
                        </div>
                    </div>
                    
                    <div>
                        <h5 className="mt-4">GET Task:</h5>
                        <Card className="getTask d-flex align-items-center shadow-lg">
                            <div className="d-flex align-items-center ms-2">
                                <span>Task ID:</span>
                                <form onSubmit={handleGetTask}>
                                    <TextField size="small" label="ID Number" type="number" className="ms-2" onChange={handleGetId} />
                                    <Button type='submit' variant="contained" className="ms-2 text-capitalize">Get Task</Button>
                                </form>
                            </div>
                        </Card>

                        <h5 className="mt-4">CREATE Task:</h5>
                        <Card className="createTask shadow-lg">
                            <form onSubmit={handleInsertSubmit}>
                                <div className='d-flex align-items-center justify-content-around'>
                                    <span>Task Title:</span>
                                    <TextField size="small" label="Task Title" type="text" id="title"  name="title" onChange={handleInsertTitle} />
                                </div>
                                <div className='d-flex align-items-center justify-content-around mt-2'>
                                    <span>Task Body:</span>
                                    <TextField size="small" label="Task Body" type="text" id="body" name="body" onChange={handleInsertBody} />
                                </div>
                                <div className='d-flex align-items-center justify-content-start ms-2 mt-2'>
                                    <span>Is the Task done?</span>
                                    <Checkbox  id="check" name="check" onChange={handleInsertCheck} />
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
                                    <TextField size="small" label="Task ID" type="number" onChange={handleUpdateId} />
                                </div>
                                <div className='d-flex align-items-center justify-content-around mt-2'>
                                    <span>Task Title:</span>
                                    <TextField size="small" label="Task Title" type="text" onChange={handleUpdateTitle}  />
                                </div>
                                <div className='d-flex align-items-center justify-content-around mt-2'>
                                    <span>Task Body:</span>
                                    <TextField size="small" label="Task Body" type="text" onChange={handleUpdateBody} />
                                </div>
                                <div className='d-flex align-items-center justify-content-start ms-2 mt-2'>
                                    <span>Is the Task done?</span>
                                    <Checkbox id="check" name="check" onChange={handleUpdateCheck} />
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
                                    <TextField size="small" label="ID Number" type="number" className="ms-2" onChange={handleDeleteId}/>
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