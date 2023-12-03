import React from 'react';
import Cuppon from './Cuppon';

const CupponSection = () => {
    return (
        <div className="flex justify-around px-2 relative">
            <Cuppon />
            <Cuppon />
            <Cuppon />
        </div>
    );
};

export default CupponSection;
