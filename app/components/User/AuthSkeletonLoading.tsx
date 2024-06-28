import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const AuthSkeletonLoading = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Skeleton height={50} width={90} />
            <Skeleton height={50} width={90} />
        </div>
    )
}

export default AuthSkeletonLoading;