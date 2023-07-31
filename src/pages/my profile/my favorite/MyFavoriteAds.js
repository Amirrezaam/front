import React from 'react'
import Advertising from '../../../components/Advertising'

export default function MyFavoriteAds() {
    return (
        <div className="col-md-8">
            <div className="my-ads section">
                <h2>آگهی‌های محبوب</h2>
                <Advertising />
                <Advertising />
                <Advertising />
                <Advertising />
                <Advertising />
            </div>
        </div>
    )
}
