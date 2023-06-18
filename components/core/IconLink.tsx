import React from 'react'
import Link from 'next/link'
import Arrow from '../icons/ArrowIcon';

type LinkType = {
    label: string;
    href: string;
}

function IconLink({ label, href }: LinkType) {
    return (
        <Link href={href} rel="noopener noreferrer" target="_blank">
            <div className='flex items-center space-x-1'>
                <span className='text-gray-500 hover:text-gray-600 transition'>
                    {label}
                </span>
                <Arrow />
            </div>
        </Link >
    )
}

export default IconLink