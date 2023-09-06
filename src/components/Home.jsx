import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from "@mui/material";

function Home() {

    const endPoint = process.env.REACT_APP_API_URL + "/profile";
    const [profiles, setProfiles] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = endPoint + "/all";
        axios.get(url)
            .then(res => {
                setProfiles(res.data);
                setLoading(false);
            })
            .catch(err => console.error(err))
    }, [loading, endPoint])

    const fetchAddress = (address) => {
        let result = ""
        for (const key in address) {
            result += address[key] + " "
        }
        return result;
    }

    if (loading) {
        return <div> loading... </div>
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom sx={{ margin: "2% 40%" }}>
                Business Profiles
            </Typography>
            <TableContainer component={Paper} sx={{ width: "90%", margin: "0 5% " }}>
                <Table aria-label="booking history table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Profile ID</b></TableCell>
                            <TableCell><b>Company Name</b></TableCell>
                            <TableCell><b>Legal name</b></TableCell>
                            <TableCell><b>Business Address</b></TableCell>
                            <TableCell><b>Legal Address</b></TableCell>
                            <TableCell><b>Tax PAN</b></TableCell>
                            <TableCell><b>Tax EIN</b></TableCell>
                            <TableCell><b>Email</b></TableCell>
                            <TableCell><b>Website</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {profiles.map((profile, index) => (
                            <TableRow key={index}>
                                <TableCell>{profile.id}</TableCell>
                                <TableCell>{profile.companyName}</TableCell>
                                <TableCell>{profile.legalName}</TableCell>
                                <TableCell>{fetchAddress(profile.businessAddress)}</TableCell>
                                <TableCell>{fetchAddress(profile.legalAddress)}</TableCell>
                                <TableCell>{profile.taxIdentifiers.pan}</TableCell>
                                <TableCell>{profile.taxIdentifiers.ein}</TableCell>
                                <TableCell>{profile.email}</TableCell>
                                <TableCell>{profile.website}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={() => console.log("I am here")}
                                    >
                                        Update
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home;