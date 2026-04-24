import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  dashboardPalette,
  deviceData,
  monthlyTraffic,
  regionData,
} from "../../assets/dashboardData";

const cardSx = {
  borderRadius: "24px",
  border: `1px solid ${dashboardPalette.lilac}`,
  backgroundColor: dashboardPalette.white,
  boxShadow: "0 16px 40px rgba(90, 42, 110, 0.08)",
};

function ReportsPage() {
  return (
    <Stack spacing={3}>
      <Card sx={{ ...cardSx, backgroundColor: dashboardPalette.cream }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={2}
          >
            <Box>
              <Typography
                sx={{
                  color: dashboardPalette.rose,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                }}
              >
                Reports
              </Typography>
              <Typography
                variant="h4"
                sx={{ mt: 1.5, color: dashboardPalette.plum, fontWeight: 700 }}
              >
                Reports for monitoring awareness reach, campaign activity, and
                engagement trends
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  color: dashboardPalette.text,
                  maxWidth: 720,
                  lineHeight: 1.8,
                }}
              >
                This page presents sample reporting visuals for the advocacy
                platform, including audience reach, report generation, and
                regional participation. The values are still demo data, but the
                content is framed around how campaign performance could be
                tracked in the actual system.
              </Typography>
            </Box>

            <Chip
              icon={<InsightsOutlinedIcon />}
              label="Visualization Ready"
              sx={{
                px: 1,
                backgroundColor: dashboardPalette.plum,
                color: dashboardPalette.white,
                "& .MuiChip-icon": { color: dashboardPalette.white },
                fontWeight: 700,
              }}
            />
          </Stack>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", xl: "1.3fr 0.9fr" },
          gap: 3,
        }}
      >
        <Card sx={cardSx}>
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="h6"
              sx={{ color: dashboardPalette.plum, fontWeight: 700 }}
            >
              Monthly Reach and Report Activity
            </Typography>
            <Typography
              sx={{ mt: 1, color: dashboardPalette.text, opacity: 0.75 }}
            >
              Compares platform visits with generated advocacy reports over time
              using sample values.
            </Typography>
            <Box sx={{ mt: 3, overflowX: "auto" }}>
              <LineChart
                height={340}
                dataset={monthlyTraffic}
                xAxis={[{ dataKey: "month", scaleType: "point" }]}
                series={[
                  {
                    dataKey: "visitors",
                    label: "Audience Reach",
                    color: dashboardPalette.plum,
                  },
                  {
                    dataKey: "reports",
                    label: "Reports Created",
                    color: dashboardPalette.rose,
                  },
                ]}
              />
            </Box>
          </CardContent>
        </Card>

        <Card sx={cardSx}>
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="h6"
              sx={{ color: dashboardPalette.plum, fontWeight: 700 }}
            >
              Access Channels
            </Typography>
            <Typography
              sx={{ mt: 1, color: dashboardPalette.text, opacity: 0.75 }}
            >
              Shows how users may be accessing awareness resources across
              devices.
            </Typography>
            <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
              <PieChart
                height={300}
                colors={[
                  dashboardPalette.plum,
                  dashboardPalette.rose,
                  dashboardPalette.lilac,
                ]}
                series={[
                  {
                    data: deviceData,
                    innerRadius: 55,
                    outerRadius: 105,
                    cornerRadius: 6,
                    paddingAngle: 3,
                  },
                ]}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Card sx={cardSx}>
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            sx={{ color: dashboardPalette.plum, fontWeight: 700 }}
          >
            Regional Participation Summary
          </Typography>
          <Typography
            sx={{ mt: 1, color: dashboardPalette.text, opacity: 0.75 }}
          >
            Sample comparison of outreach participation across regions.
          </Typography>
          <Box sx={{ mt: 3, overflowX: "auto" }}>
            <BarChart
              height={320}
              dataset={regionData}
              xAxis={[{ dataKey: "region", scaleType: "band" }]}
              series={[
                {
                  dataKey: "count",
                  label: "Participants",
                  color: dashboardPalette.rose,
                },
              ]}
            />
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default ReportsPage;
