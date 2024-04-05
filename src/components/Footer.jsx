import React from 'react'
import Container from './Container'

const Footer = () => {
    return (
        <footer className="mt-auto bg-neutral-600 text-white py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <p className="font-heading">
                        Copy Right ©
                        <a href="#" className="text-neutral-300 ms-1">E-commerce</a>
                    </p>
                    <a href="#categoryList" className="flex justify-items-end items-end scroll-smooth duration-200 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 stroke-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                </div>

            </Container>
        </footer>

    )
}

export default Footer