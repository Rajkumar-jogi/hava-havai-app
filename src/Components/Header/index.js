import React from 'react';
import { View } from '@react-spectrum/view';


function Profile() {
    const profileStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 20px',
        boxShadow: '0 10px 16px 0 rgba(0,0,0,0.3)',
        height: '40px'
    };

    const imageStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '20px',
    };

    return (
        <View UNSAFE_style={profileStyle}>
            <h1>Hava Havai</h1>
            <img src={`${process.env.PUBLIC_URL}/avatar.png`} alt='profile' style={imageStyle} />
        </View>
    );
}

export default Profile;
