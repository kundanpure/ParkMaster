import React, { useState } from 'react';
import axios from 'axios';

const VehicleSearch = () => {
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [modelYear, setModelYear] = useState('');
    const [vehicleDetails, setVehicleDetails] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.get(`http://localhost:8090/api/vehicle/search/${registrationNumber}`, {
                params: { modelYear },
            });
            setVehicleDetails(response.data);
        } catch (err) {
            setError('Error fetching vehicle details');
        }
    };

    return (
        <div>
            <h2>Vehicle Search</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Registration Number"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Model Year"
                    value={modelYear}
                    onChange={(e) => setModelYear(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
            </form>
            {error && <p>{error}</p>}
            {vehicleDetails && (
                <div>
                    <h3>Vehicle Details:</h3>
                    <pre>{JSON.stringify(vehicleDetails, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default VehicleSearch;
