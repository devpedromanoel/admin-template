import ItemBar from "./ItemBar";
import Logo from "./Logo";
import { IconHome, IconSettings, IconNotifications, IconLogout } from "../icons";
import useAuth from "../../data/hook/useAuth";

interface SideBarProps {

}

export default function SideBar(props: SideBarProps) {
  const { logout } = useAuth();

  return (
    <aside className={`
      flex flex-col
      bg-gray-200 text-gray-700
      dark:bg-gray-900
    `}>
      <div className={`
        flex flex-col
        items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
      `}>
        <Logo />
      </div>
      <ul className="flex-grow">
        <ItemBar url="/" text="Home" icon={IconHome}/>
        <ItemBar url="/settings" text="Settings" icon={IconSettings}/>
        <ItemBar url="/notifications" text="Notifications" icon={IconNotifications}/>
      </ul>
      <ul>
        <ItemBar 
          onClick={logout}
          text="Log out" icon={IconLogout} 
          className={`
            text-red-600 dark:text-red-400
            hover:bg-red-400 hover:text-white dark:hover:text-white
          `}/>
      </ul>
    </aside>
  )  
}