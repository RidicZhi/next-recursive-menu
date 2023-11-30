'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Dropdown from './Dropdown'
import EventBus from '@/utils/EventBus'

interface HeaderNavItemProps {
  item: MenuItem
}

const HeaderNavItem: React.FC<HeaderNavItemProps> = ({
  item: { id, title, url, submenu }
}) => {
  const [showDropdown, setShowDropdown] = useState(false)

  // This app can dynamically show multi-layer menu. So we need to recursively render this component.
  // This event can listen all layers menu, so that it will close all when user click any one item.
  useEffect(() => {
    //only add listener for those item who has submenu
    if (submenu.length < 1) return

    const closeDropdown = () => {
      setShowDropdown(false)
    }
    EventBus.getInstance().addListener('CLOSE_ALL_DROPDOWN', closeDropdown)
    return () => {
      EventBus.getInstance().removeListener(closeDropdown)
    }
  }, [])

  const closeAllDropdown = () => {
    EventBus.getInstance().fireEvent('CLOSE_ALL_DROPDOWN')
  }

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
        <Link href={url} onClick={closeAllDropdown}>
          {title}
        </Link>
      )}
    </li>
  )
}

export default HeaderNavItem
