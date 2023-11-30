export const GET = async () => {
  try {
    // TO-DO: await connect to DB
    // TO-DO: find menu JSON
    return new Response(JSON.stringify(MOCK_MENU), { status: 200 })
  } catch (error) {
    return new Response('Failed to fetch menu', { status: 500 })
  }
}

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
