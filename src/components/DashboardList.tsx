import React from 'react';
import Grid from '@mui/material/Grid';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <Grid container spacing={2}>
                <Grid item xs={4} sm={2} onClick={() => navigate('/dashboard')}>
                    <DashboardIcon fontSize="large" />
                    <div>Dashboard</div>
                </Grid>
                <Grid item xs={4} sm={2} onClick={() => navigate('/client')}>
                    <AccountCircleIcon fontSize="large" />
                    <div>Profile</div>
                </Grid>
                <Grid item xs={4} sm={2} onClick={() => navigate('/provider')}>
                    <AssignmentIcon fontSize="large" />
                    <div>Assignments</div>
                </Grid>
                <Grid item xs={4} sm={2} onClick={() => navigate('/hospital')}>
                    <LocalHospitalIcon fontSize="large" />
                    <div>Hospitals</div>
                </Grid>
                <Grid item xs={4} sm={2} onClick={() => navigate('/claims')}>
                    <PeopleIcon fontSize="large" />
                    <div>People</div>
                </Grid>
                <Grid item xs={4} sm={2} onClick={() => navigate('/claims')}>
                    <ReceiptIcon fontSize="large" />
                    <div>Receipts</div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;
