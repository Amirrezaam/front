import React from 'react'
import Advertising from '../../../components/Advertising'

export default function PendingAds() {
    return (
        <div className="col-md-8">
            <div className="my-ads section">
                <h2>آگهی‌های در انتظار</h2>
                <Advertising />
                <Advertising />
                <Advertising />
                <Advertising />
                <Advertising />
            </div>
        </div>
    )
}
