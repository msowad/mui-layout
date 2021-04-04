import React from "react"
import { Avatar, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  pageTitle: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(3),
  },
  avatar: {
    marginRight: theme.spacing(1),
    background: `${theme.palette.grey[300]} !important`,
  },
  icon: {
    color: theme.palette.secondary.main,
  },
}))

export default function PageTitle(props) {
  const classes = useStyles()

  return (
    <Typography className={classes.pageTitle} variant="h6">
      <Avatar className={classes.avatar}>
        <div className={classes.icon}>{props.icon}</div>
      </Avatar>
      {props.title}
    </Typography>
  )
}
