'use client'

import { useState } from 'react'
import Link from 'next/link'
import Dropdown from './Dropdown'

interface HeaderNavItemProps {
  item: MenuItem
}

const HeaderNavItem: React.FC<HeaderNavItemProps> = ({
  item: { id, title, url, submenu }
}) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <li className={'menu-item'}>
      {submenu.length > 0 ? (
        <>
          <button
            type='button'
            aria-haspopup={showDropdown ? 'true' : 'false'}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {title} {showDropdown ? '↑' : '↓'}
          </button>
          <Dropdown submenus={submenu} showDropdown={showDropdown} />
        </>
      ) : (
        <Link href={url} >
          {title}
        </Link>
      )}
    </li>
  )
}

export default HeaderNavItem
