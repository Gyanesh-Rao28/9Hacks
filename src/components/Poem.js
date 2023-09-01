import React, { useState } from 'react'

const Poem = () => {
    const [poem, setpoem] = useState(null)
    return (
        <>
            <div className="group relative">
                <div className="relative h-1/2 w-full flex justify-center items-center overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
                    <div className="h-full w-1/2 object-cover object-center rounded-lg border-2 border-sky-500">
                        <p className='p-3 text-center text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quis explicabo, dolorum et, quo impedit earum ullam laborum nisi numquam qui commodi reprehenderit sequi pariatur hic molestiae recusandae eaque ducimus.</p>
                    </div>
                </div>

                <p className="flex justify-center items-center text-base font-semibold text-gray-900">Poem</p>
                <audio src={require("../assets/audio_01.mp3")} controls className='flex justify-center items-center' />

            </div>
        </>
    )
}

export default Poem