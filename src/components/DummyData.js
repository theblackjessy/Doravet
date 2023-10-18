import Poll from "../../public/dashboard/icons/Poll"
import Overview from "../../public/dashboard/icons/Overview"
import Voters from "../../public/dashboard/icons/Voters"
import Notification from "../../public/dashboard/icons/Notification"
import Logout from "../../public/dashboard/icons/Logout"
import Delete from "../../public/dashboard/icons/Delete"
import DateIcon from "../../public/dashboard/icons/DateIcon"

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

export const TableData = [
  {
    email: "emmanuel@gmail.com",
    walletid: "0x71C7eu8...8e88T",
    firstName: "Emmanuel",
    lastName: "Oshupueu",
    icon: <Delete />
  },
  {
    email: "emmanuel@gmail.com",
    walletid: "0x71C7eu8...8e88T",
    firstName: "Emmanuel",
    lastName: "Oshupueu",
    icon: <Delete />
  },
  {
    email: "emmanuel@gmail.com",
    walletid: "0x71C7eu...88e88T",
    firstName: "Emmanuel",
    lastName: "Oshupueu",
    icon: <Delete />
  },
  {
    email: "emmanuel@gmail.com",
    walletid: "0x71C7eu88e888e88T",
    firstName: "Emmanuel",
    lastName: "Oshupueu",
    icon: <Delete />
  },
  {
    email: "emmanuel@gmail.com",
    walletid: "0x71C7eu88e888e88T",
    firstName: "Emmanuel",
    lastName: "Oshupueu",
    icon: <Delete />
  }
]


export const pollData = [
  {
    id: 1,
    title: "Employee of the week",
    desc: "The poll description goes here. You can type as many details as possible. Feel free. Knock yourself out. There is enough room for you. Okay! This should do!",
    status: 0,
    start: 'August 2, 2023 12:00pm',
    end: 'August 2, 2023 12:00pm',
    icon: <DateIcon />,
    candidates: [
      {
        name: 'Highdan Varim',
        votes: 25
      },
      {
        name: 'Oshuporu',
        votes: 18
      }
    ],
    totalVotes: 33,
    voters: 33
  },
  {
    id: 2,
    title: "Employee of the week",
    desc: "The poll description goes here. You can type as many details as possible. Feel free. Knock yourself out. There is enough room for you. Okay! This should do!",
    status: 1,
    start: 'August 2, 2023 12:00pm',
    end: 'August 2, 2023 12:00pm',
    icon: <DateIcon />,
    candidates: [
      {
        name: 'Agba Ogidan',
        votes: 10
      },
      {
        name: 'Emmanuel Oshuporu',
        votes: 30
      },
      {
        name: 'Dudu Osun',
        votes: 25
      }
    ],
    totalVotes: 33,
    voters: 33
  },
  {
    id: 3,
    title: "Employee of the week",
    desc: "The poll description goes here. You can type as many details as possible. Feel free. Knock yourself out. There is enough room for you. Okay! This should do!",
    status: 2,
    start: 'August 2, 2023 12:00pm',
    end: 'August 2, 2023 12:00pm',
    icon: <DateIcon />,
    candidates: [
      {
        name: 'Agba Ogidan',
        votes: 20
      },
      {
        name: 'Dudu Osun',
        votes: 25
      }
    ],
    totalVotes: 33,
    voters: 33

  },
  
]