import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import vehicleSearchImage from '../images/vehicle_search.jpg';
import qrGeneratorImage from '../images/qr_generator.jpg';

const Home = () => {
    const { user } = useContext(UserContext);

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Welcome, {user.username}!
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
                Available Services:
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item>
                    <Card style={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="Vehicle Search"
                            height="140"
                            image={vehicleSearchImage}
                            title="Vehicle Search"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Vehicle Search
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Search for vehicle details quickly and easily.
                            </Typography>
                            <Link to="/search" style={{ textDecoration: 'none', marginTop: '10px', display: 'block' }}>
                                <button style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#1976d2', color: 'white', border: 'none' }}>
                                    Go to Vehicle Search
                                </button>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card style={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="QR Generator"
                            height="140"
                            image={qrGeneratorImage}
                            title="QR Generator"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                QR Generator
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Generate QR codes for vehicles easily.
                            </Typography>
                            <Link to="/generate-qr" style={{ textDecoration: 'none', marginTop: '10px', display: 'block' }}>
                                <button style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#1976d2', color: 'white', border: 'none' }}>
                                    Go to QR Generator
                                </button>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
