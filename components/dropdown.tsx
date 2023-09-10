import React, { useState } from 'react'

interface DropdownType {
    content: React.ReactNode
    children: React.ReactNode
}

function Dropdown({ children, content }: DropdownType) {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    return <div className='relative'>
        <div onClick={() => {
            setShowDropdown(!showDropdown)
        }}>
            {children}
        </div>
        <div className={`absolute top-12 left-0 min-w-max ${showDropdown ? "visible" : "invisible"}`}>
            {content}
        </div>
    </div>
}

export default Dropdown