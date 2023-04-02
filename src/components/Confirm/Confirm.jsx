import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";

function Confirm() {
    return (

        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Confirma tus datos
            </Typography>
            <Grid sx={{ maxWidth: 600 }} container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Nombre"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="lname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Email"
                        name="Email"
                        label="Email"
                        fullWidth
                        autoComplete="Email"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="Repetir Email"
                        name="Repetir Email"
                        label="Repetir Email"
                        fullWidth
                        autoComplete="Repetir Email"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Confirm;
