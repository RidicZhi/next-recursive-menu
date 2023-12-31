type MenuItem = {
  id: string
  title: string
  url: string
  submenu: MenuItem[] | []
};

type MenuArray = MenuItem[]

type LoginPostData = {
  userName: string;
  password: string
}