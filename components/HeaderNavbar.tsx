import Image from 'next/image'
import Link from 'next/link'
import HeaderNavItem from './HeaderNavItem'

const MOCK_MENU = [
    { id: '1', title: 'Home', url: '/', submenu: [] },
    { id: '2', title: 'Login', url: '/login', submenu: [] },
    {
      id: '3',
      title: 'Service',
      url: '/service',
      submenu: [
        {
          id: '3.1',
          title: 'Technology',
          url: '/service/tech',
          submenu: [
            {
              id: '3.1.1',
              title: 'Web App',
              url: '/service/tech/web',
              submenu: []
            },
            {
              id: '3.1.2',
              title: 'Mobile App',
              url: '/service/tech/mobile',
              submenu: []
            }
          ]
        },
        {
          id: '3.2',
          title: 'Food Delivery',
          url: '/service/food_delivery',
          submenu: []
        },
        {
          id: '3.3',
          title: 'House Cleaning',
          url: '/service/house_cleaning',
          submenu: []
        }
      ]
    },
    { id: '4', title: 'About', url: '/about', submenu: [] }
  ]

const HeaderNavbar = () => {
  
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
          />
        </Link>
        <nav className='nav-container ml-8'>
          <ul className='parent-nav-ul' aria-label='menu-ul'>
            {MOCK_MENU.map((item: MenuItem) => (
              <HeaderNavItem item={item} key={item.id} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderNavbar
