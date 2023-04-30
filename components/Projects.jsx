import React from "react";
import ProjectItem from "@/components/ProjectItem";
import propertyImg from "@/public/assets/projects/property.jpg";
import CryptoImg from "@/public/assets/projects/crypto.jpg";
import NetflixImg from "@/public/assets/projects/netflix.jpg";
import TwitchImg from "@/public/assets/projects/twitch.jpg";

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I&#39;ve Build</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <ProjectItem title='Proprety Finder' background={propertyImg} projectUrl='/property'/>

                    <ProjectItem title='Crypto App' background={CryptoImg} projectUrl='/crypto'/>

                    <ProjectItem title='Proprety Finder' background={NetflixImg} projectUrl='/'/>

                    <ProjectItem title='Proprety Finder' background={TwitchImg} projectUrl='/'/>

                </div>
            </div>
        </div>
    )
}

export default Projects;