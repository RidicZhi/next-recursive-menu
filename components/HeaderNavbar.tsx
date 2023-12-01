import Image from 'next/image'
import Link from 'next/link'
import HeaderNavItem from './HeaderNavItem'

//Server Side Fetching with Time-based Revalidation
const getMenuJSON = async (): Promise<MenuArray[]> => {
  const res = await fetch('http://localhost:3000/api/menu', {
    next: { revalidate: 3600 }
  })
  const menuData = await res.json()
  return menuData
}

//Server Component
const HeaderNavbar: React.FC = async () => {
  const menuData = await getMenuJSON()
  // console.log('Fetched Menu:', menuData)
  return (
    <header className='header-bar'>
      <div className='header-container'>
        <Link href='/'>
          <Image
            width={50}
            height={50}
            src='/logo.png'
            className='mobile-hide'
            alt='logo'
            priority={true}
          />
        </Link>
        <nav className='nav-container ml-8'>
          <ul className='parent-nav-ul' aria-label='menu-ul'>
            {menuData.map((item: MenuItem) => (
              <HeaderNavItem item={item} key={item.id} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderNavbar
