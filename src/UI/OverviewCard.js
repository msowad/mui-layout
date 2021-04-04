import React from "react"
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  title: {
    textTransform: "uppercase",
    marginTop: theme.spacing(1),
  },
  icon: {
    color: theme.palette.grey[700],
  },
}))

export default function OverviewCard(props) {
  const classes = useStyles()

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <div className={classes.icon}>{props.icon}</div>
          <Typography className={classes.title} variant="h5" color="primary">
            {props.title}
          </Typography>
          <Typography variant="button" color="secondary" component="p">
            {props.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
