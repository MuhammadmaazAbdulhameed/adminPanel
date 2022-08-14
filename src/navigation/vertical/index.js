import { Mail, Grid } from "react-feather"

export default [
  {
    id: "dashboard",
    title: "dashboard",
    icon: <Grid size={20} />,
    navLink: "/dashboard"
  },
  {
    id: "secondPage",
    title: "Second Page",
    icon: <Mail size={20} />,
    navLink: "/second-page"
  }
]
