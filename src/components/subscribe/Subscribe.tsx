import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import { json } from 'stream/consumers'
const styles = {
    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: '20px',
        height: "40vh",
        width: "30%",
        borderRadius: "10px",
        background: "#FFE4C4",
        boxSizing: "border-box",
        padding: "10px"
    }
}
export const Subscribe = () => {
    const [sucess, setSucess] = useState(false)
    const [response,setResponse] = useState('')
    const [user, setUser] = useState({
        name: '',
        email: ""
    })
    const [error, setError] = useState({
        name: '',
        email: ""
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const { name, value } = event.target
        switch (name) {
            case 'name': setError((prev) => ({ ...prev, [name]: value.length > 2 ? "" : "invalid name" }))
                break;
            case 'email': setError((prev) => ({ ...prev, [name]: emailRegex.test(value) ? "" : "invalid email" }))
                break;
        }
        setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }
    const apiCall = () => {
        let id;
        clearInterval(id)
        return new Promise((resolve, reject) => {
            id = setTimeout(() => {
                return resolve('register sucess')
            }, 3000);
        })
    }
    const handleSubmit = async() => {
        const res = await apiCall()
        setResponse(JSON.stringify(res))
        setSucess(true)
    }
    return (
        <Stack sx={styles.main}>
            <Stack sx={styles.container}>
                {
                    sucess && <Typography>register success{response}</Typography>
                }
                <Typography>Join the newsettler</Typography>
                <Stack gap={'10px'}>
                    <TextField name='name' value={user.name} onChange={handleChange} placeholder='name' error={!!error.name} helperText={error.name}></TextField>
                    <TextField name='email' value={user.email} onChange={handleChange} placeholder='email' error={!!error.email} helperText={error.email}></TextField>
                </Stack>
                <Button sx={{ background: "green", color: "white" }} onClick={handleSubmit}>Subscribe</Button>
            </Stack>
        </Stack>
    )
}
