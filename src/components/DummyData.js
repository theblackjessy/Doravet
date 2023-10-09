import Poll from "../../public/dashboard/icons/Poll"
import Overview from "../../public/dashboard/icons/Overview"
import Voters from "../../public/dashboard/icons/Voters"
import Notification from "../../public/dashboard/icons/Notification"
import Logout from "../../public/dashboard/icons/Logout"

export const SidebarData = [
  {
    name: "Overview",
    icon: <Overview />,
    url: "/overview"
  },

  {
    name: "Poll",
    icon: <Poll />,
    url: "/poll"
  },

  {
    name: "Voters",
    icon: <Voters />,
    url: "/voters"
  },

  {
    name: "Notifications",
    icon: <Notification />,
    url: "/notifications"
  },


]