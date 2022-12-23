import {
    HomeIcon,
    HeartIcon,
    PlusCircleIcon,
    RssIcon,
    ViewfinderCircleIcon,
    QueueListIcon,
  } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
  import IconButton from "../components/Iconbutton";
  
  const Divider = () => <hr className="border-t-[0.1px] border-gray-900" />;
  
  const Sidebar = () => {
    const {data: session} = useSession()
    return (
      <div className="text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll scrollbar-hidden scrollbar-hidden sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block">
        <div className="space-y-4">

          {session?.user && <button>{session.user.name} - Log Out</button>}
          <IconButton icon={HomeIcon} label="Home" />
          <IconButton icon={HeartIcon} label="Like song" />
          <IconButton icon={QueueListIcon} label="Your Library" />
          <Divider />
          <IconButton icon={PlusCircleIcon} label="Create Playlist" />
          <IconButton icon={ViewfinderCircleIcon} label="Search" />
          <IconButton icon={RssIcon} label="Your episodes" />
          <Divider />
          <p className="cursor-pointer hover:text-white">PLAYLIST</p>
          <p className="cursor-pointer hover:text-white">PLAYLIST</p>
          <p className="cursor-pointer hover:text-white">PLAYLIST</p>
          <p className="cursor-pointer hover:text-white">PLAYLIST</p>
          <p className="cursor-pointer hover:text-white">PLAYLIST</p>
          <p className="cursor-pointer hover:text-white">PLAYLIST</p>
          <p className="cursor-pointer hover:text-white">PLAYLIST</p>
          <p className="cursor-pointer hover:text-white">PLAYLIST</p>
          <p className="cursor-pointer hover:text-white">PLAYLIST</p>
          <p className="cursor-pointer hover:text-white">PLAYLIST</p>
          <p className="cursor-pointer hover:text-white">PLAYLIST</p>
          <p className="cursor-pointer hover:text-white">PLAYLIST</p>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  