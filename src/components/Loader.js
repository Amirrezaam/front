import React from 'react'
import { SpinnerCircular } from 'spinners-react';

export default function Loader({ className }) {
    return (
        <div className={`loader ${className}`}>
            <SpinnerCircular
                size={50}
                thickness={180}
                speed={136}
                color="#e73243"
                secondaryColor="rgba(0, 0, 0, 0.44)"
            />
        </div>
    )
}