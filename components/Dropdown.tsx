'use client'

import HeaderNavItem from './HeaderNavItem'

interface DropdownProps {
  submenus: MenuArray
  showDropdown: boolean
}

const Dropdown: React.FC<DropdownProps> = ({
  submenus,
  showDropdown = false
}) => {
  return (
    <div className={`dropdown ${showDropdown ? 'show' : 'hide'}`}>
      <ul>
        {submenus.map((subItem) => (
          // recursively render to show sub-sub
          <HeaderNavItem key={subItem.id} item={subItem} />
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
