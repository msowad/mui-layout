import { Grid } from "@material-ui/core"
import {
  Dashboard,
  Person,
  RoundedCornerOutlined,
  SwitchCamera,
  WorkOutline,
} from "@material-ui/icons"
import React from "react"
import Layout from "../../Layout/Index"
import PageTitle from "../../UI/PageTitle"
import OverviewCard from "../../UI/OverviewCard"

export default function Home() {
  return (
    <Layout>
      <PageTitle title="Dashboard" icon={<Dashboard />} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <OverviewCard
            icon={<WorkOutline />}
            title="$10101"
            subtitle="This month total earning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OverviewCard
            icon={<RoundedCornerOutlined />}
            title="$10101"
            subtitle="This month total earning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OverviewCard
            icon={<Person />}
            title="$10101"
            subtitle="This month total earning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <OverviewCard
            icon={<SwitchCamera />}
            title="$10101"
            subtitle="This month total earning"
          />
        </Grid>
      </Grid>
    </Layout>
  )
}
