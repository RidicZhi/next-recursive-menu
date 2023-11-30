type SubmenuItem = {
    id: string
    title: string
    url: string
    submenu: MenuArray
  };
  
  type MenuItem = {
    id: string
    title: string
    url: string
    submenu: SubmenuItem[]
  };
  
  type MenuArray = MenuItem[]