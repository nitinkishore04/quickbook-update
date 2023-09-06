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

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const names = name.split('.');

        if (names.length === 2) {
            const [parentName, childName] = names;
            setUpdateProfiles({
                ...updateProfile,
                [parentName]: {
                    ...updateProfile[parentName],
                    [childName]: value,
                },
            });
        } else {
            setUpdateProfiles({
                ...updateProfile,
                [name]: value,
            });
        }
    };

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
                        name="companyName"
                        value={updateProfile.companyName}
                        onChange={handleInputChange}
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
                        name="legalName"
                        value={updateProfile.legalName}
                        onChange={handleInputChange}
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
                        name="businessAddress.line1"
                        value={updateProfile.businessAddress.line1}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="[Business Addess] Line 2"
                    />
                    <TextField
                        id="outlined-required"
                        name="businessAddress.line2"
                        value={updateProfile.businessAddress.line2}
                        onChange={handleInputChange}
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
                        name="businessAddress.city"
                        value={updateProfile.businessAddress.city}
                        onChange={handleInputChange}
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
                        name="businessAddress.state"
                        value={updateProfile.businessAddress.state}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="[Business Addess] Zip"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        name="businessAddress.zip"
                        value={updateProfile.businessAddress.zip}
                        onChange={handleInputChange}
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
                        name="businessAddress.country"
                        value={updateProfile.businessAddress.country}
                        onChange={handleInputChange}
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
                        name="legalAddress.line1"
                        value={updateProfile.legalAddress.line1}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="[Legal Addess] Line 2"
                    />
                    <TextField
                        id="outlined-required"
                        name="legalAddress.line2"
                        value={updateProfile.legalAddress.line2}
                        onChange={handleInputChange}
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
                        name="legalAddress.city"
                        value={updateProfile.legalAddress.city}
                        onChange={handleInputChange}
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
                        name="legalAddress.state"
                        value={updateProfile.legalAddress.state}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="[Legal Addess] Zip"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        name="legalAddress.zip"
                        value={updateProfile.legalAddress.zip}
                        onChange={handleInputChange}
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
                        name="legalAddress.country"
                        value={updateProfile.legalAddress.country}
                        onChange={handleInputChange}
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
                        name="taxIdentifiers.pan"
                        value={updateProfile.taxIdentifiers.pan}
                        onChange={handleInputChange}
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
                        name="taxIdentifiers.ein"
                        value={updateProfile.taxIdentifiers.ein}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="Email"
                    />
                    <TextField
                        id="outlined-required"
                        name="email"
                        value={updateProfile.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <TextField
                        disabled
                        value="Website"
                    />
                    <TextField
                        id="outlined-required"
                        name="website"
                        value={updateProfile.website}
                        onChange={handleInputChange}
                    />
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    width="100%"
                    onClick={() => console.log(updateProfile)}
                >
                    Update
                </Button>

            </Box>
        </Container>
    )
}

export default Update