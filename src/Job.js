import React from 'react';


export default function job({job}){
    return(
        <div className ={'job'}>
            {job.title}
            {job.company}
        </div>
    )
}