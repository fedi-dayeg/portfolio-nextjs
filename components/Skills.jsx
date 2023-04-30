import React from "react";
import Image from "next/image"
import Html from '../public/assets/skills/html.png'
import CSS from '../public/assets/skills/css.png'
import JAVASCRIPT  from '../public/assets/skills/javascript.png'
import REACT  from '../public/assets/skills/react.png'
import TAILWIND  from '../public/assets/skills/tailwind.png'
import GITHUB  from '../public/assets/skills/github1.png'
import SHOPIFY  from '../public/assets/skills/shopify.png'
import FIREBASE  from '../public/assets/skills/firebase.png'

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Html} width="64px" height='64px' alt=''/>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={CSS} width="64px" height='64px' alt=''/>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={JAVASCRIPT} width="64px" height='64px' alt=''/>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={REACT} width="64px" height='64px' alt=''/>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={TAILWIND} width="64px" height='64px' alt=''/>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={GITHUB} width="64px" height='64px' alt=''/>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={SHOPIFY} width="64px" height='64px' alt=''/>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Shopify</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={FIREBASE} width="64px" height='64px' alt=''/>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </div>
    )
}
 export default Skills;