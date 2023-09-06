import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from "@mui/material/Box";
import { Container, TextField, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

function Update() {

    const { profileId } = useParams();
    const endPoint = process.env.REACT_APP_API_URL + "/profile";
    const [updateProfile, setUpdateProfiles] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = endPoint + `/${profileId}`;
        axios.get(url)
            .then(res => {
                setUpdateProfiles(res.data);
                setLoading(false);
            })
            .catch(err => console.error(err))
    }, [loading, endPoint])

    if (loading) {
        return <div> loading... </div>
    }

    return (
        <Container maxWidth="md" style={{ padding: "5%" }}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        disabled
                        value="Company Name"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={updateProfile.companyName}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="Legal Name"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={updateProfile.legalName}
                    />
                </div>


                <div>
                    <TextField
                        disabled
                        value="[Business Addess] Line 1"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={updateProfile.businessAddress.line1}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="[Business Addess] Line 2"
                    />
                    <TextField
                        id="outlined-required"
                        value={updateProfile.businessAddress.line2}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="[Business Addess] City"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={updateProfile.businessAddress.city}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="[Business Addess] State"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={updateProfile.businessAddress.state}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="[Business Addess] Country"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={updateProfile.businessAddress.country}
                    />
                </div>


                <div>
                    <TextField
                        disabled
                        value="[Legal Addess] Line 1"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={updateProfile.legalAddress.line1}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="[Legal Addess] Line 2"
                    />
                    <TextField
                        id="outlined-required"
                        value={updateProfile.legalAddress.line2}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="[Legal Addess] City"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={updateProfile.legalAddress.city}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="[Legal Addess] State"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={updateProfile.legalAddress.state}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="[Legal Addess] Country"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={updateProfile.legalAddress.country}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="Tax Identifiers PAN"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={updateProfile.taxIdentifiers.pan}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="Tax Identifiers EIN"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        value={updateProfile.taxIdentifiers.ein}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="Email"
                    />
                    <TextField
                        id="outlined-required"
                        value={updateProfile.email}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="Website"
                    />
                    <TextField
                        id="outlined-required"
                        value={updateProfile.website}
                    />
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    width="100%"
                    onClick={() => console.log("I was here")}
                >
                    Update
                </Button>

            </Box>
        </Container>
    )
}

export default Update