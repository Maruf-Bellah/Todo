import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectRoute = (props) => {
    const {Component} = props;
const navigate = useNavigate();

useEffect(()=>{
    let login = localStorage.getItem('value');
    if(!login){
        navigate('/loginPage')
    }
})
    return (
        <div>
            <Component/>
        </div>
    );
};

export default ProtectRoute;