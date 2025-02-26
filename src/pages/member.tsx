import Contain from "components/container";
import Hero from "components/hero";
import Meta from "components/meta";
import { Tabs, Tab, Box } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { useState } from "react";

import Member2025 from "components/member/2025";
import Member2024 from "components/member/2024";
import Member2023 from "components/member/2023";
import Member2022 from "components/member/2022";
import Member2021 from "components/member/2021";
import Member2020 from "components/member/2020";
import Member2019 from "components/member/2019";
import Member2018 from "components/member/2018";
import Member2017 from "components/member/2017";
import Member2016 from "components/member/2016";
import Member2015 from "components/member/2015";
import Member2014 from "components/member/2014";
import Member2013 from "components/member/2013";
import Member2012 from "components/member/2012";
import Member2011 from "components/member/2011";

export default function About() {
  // To change the default year to show, change the argument of useState.
  const [tab, setTab] = useState("2025");
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };
  return (
    <Contain>
      <Meta pageTitle="Member" pageDesc="iGEM Kyoto の歴代メンバーの紹介" />
      <Hero
        title="Member"
        subtitle="歴代メンバーを年度毎にご紹介します。iGEM Jamboreeに出場した年はWikiもご覧いただけます。"
      />
      <TabContext value={tab}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ backgroundColor: "#FDEFEC" /* var(--rose) */ }}
        >
          <Tabs
            value={tab}
            onChange={handleChange}
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#c4545d" /* var(--brownleaf) */,
              },
            }}
            variant="scrollable"
          >
            <Tab label="2025" value="2025" />
            <Tab label="2024" value="2024" />
            <Tab label="2023" value="2023" /> {/*  sx={{fontSize: "1.2em"}} */}
            <Tab label="2022" value="2022" />
            <Tab label="2021" value="2021" />
            <Tab label="2020" value="2020" />
            <Tab label="2019" value="2019" />
            <Tab label="2018" value="2018" />
            <Tab label="2017" value="2017" />
            <Tab label="2016" value="2016" />
            <Tab label="2015" value="2015" />
            <Tab label="2014" value="2014" />
            <Tab label="2013" value="2013" />
            <Tab label="2012" value="2012" />
            <Tab label="2011" value="2011" />
          </Tabs>
        </Box>
        <TabPanel value={"2025"}>
          <Member2025 />
        </TabPanel>
        <TabPanel value={"2024"}>
          <Member2024 />
        </TabPanel>
        <TabPanel value={"2023"}>
          <Member2023 />
        </TabPanel>
        <TabPanel value={"2022"}>
          <Member2022 />
        </TabPanel>
        <TabPanel value={"2021"}>
          <Member2021 />
        </TabPanel>
        <TabPanel value={"2020"}>
          <Member2020 />
        </TabPanel>
        <TabPanel value={"2019"}>
          <Member2019 />
        </TabPanel>
        <TabPanel value={"2018"}>
          <Member2018 />
        </TabPanel>
        <TabPanel value={"2017"}>
          <Member2017 />
        </TabPanel>
        <TabPanel value={"2016"}>
          <Member2016 />
        </TabPanel>
        <TabPanel value={"2015"}>
          <Member2015 />
        </TabPanel>
        <TabPanel value={"2014"}>
          <Member2014 />
        </TabPanel>
        <TabPanel value={"2013"}>
          <Member2013 />
        </TabPanel>
        <TabPanel value={"2012"}>
          <Member2012 />
        </TabPanel>
        <TabPanel value={"2011"}>
          <Member2011 />
        </TabPanel>
      </TabContext>
    </Contain>
  );
}
