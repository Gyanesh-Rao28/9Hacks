import React from 'react'
import Upload from './Upload'
import Poem from './Poem'

const Demo = () => {
    return (
        <>
            <div className=" mx-auto h-full w-full absolute flex flex-col sm:flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">

                <div className="group relative ">
                    <Upload />
                </div>

                <div className="group relative ">
                    <Poem />
                </div>

            </div>
        </>
    )
}

export default Demo