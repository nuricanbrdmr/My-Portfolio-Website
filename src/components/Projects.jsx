import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion";
import { FaGithub } from 'react-icons/fa';

function Projects() {
    return (
        <div className="border-b border-neutral-900 pb-4 overflow-hidden">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className='my-20 text-center text-4xl'>
                Projects
            </motion.h2>
            <div className="">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1.5 }}
                            className="w-full lg:w-1/4 max-sm:flex max-sm:justify-center">
                            <img className='mb-6 max-w-xl rounded-lg lg:w-3/4' width={150} height={150} src={project.image} alt={project.title} />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1.5 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <div className="flex justify-start items-center gap-3 mb-2">
                                <h6 className='font-semibold'>
                                    {project.title}
                                </h6>
                                <a href={project.link} target="_blank"><FaGithub className='text-gray-600 text-2xl m-0 p-0 hover:border-2 hover:border-gray-700 hover:rounded-xl' /></a>
                            </div>
                            <p className='mb-4 text-neutral-400 text-justify'>
                                {project.description}
                            </p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects