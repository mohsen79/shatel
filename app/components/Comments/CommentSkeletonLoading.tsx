import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const CommentSkeletonLoading = () => {
    return (
        <div style={{ display: 'flex', gap: "7rem" }}>
            <Skeleton height={200} width={300} />
            <Skeleton height={200} width={300} />
            <Skeleton height={200} width={300} />
            <Skeleton height={200} width={300} />
        </div>
    )
}

export default CommentSkeletonLoading;