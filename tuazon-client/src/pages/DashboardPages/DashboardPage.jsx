import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import {
  dashboardPalette,
  pieData,
  quarterlyData,
  recentReports,
  userRows,
} from "../../data/dashboardData";

const statCards = [
  {
    title: "Total Users",
    value: userRows.length,
    subtitle: "Based on MUI sample table data",
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    title: "Published Reports",
    value: "24",
    subtitle: "Prepared chart summaries",
    icon: <DescriptionOutlinedIcon />,
  },
  {
    title: "Engagement Rate",
    value: "68%",
    subtitle: "Overview snapshot",
    icon: <TrendingUpOutlinedIcon />,
  },
  {
    title: "Visual Insights",
    value: "12",
    subtitle: "Active dashboard widgets",
    icon: <EqualizerOutlinedIcon />,
  },
];

const cardSx = {
  borderRadius: "24px",
  border: `1px solid ${dashboardPalette.lilac}`,
  backgroundColor: dashboardPalette.white,
  boxShadow: "0 16px 40px rgba(90, 42, 110, 0.08)",
};

const locationMap = {
  title: "Location Map",
  address: "Metro Manila, Philippines",
  embedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=120.887695%2C14.350341%2C121.135575%2C14.798328&layer=mapnik&marker=14.604253%2C120.994314",
  viewUrl:
    "https://www.openstreetmap.org/?mlat=14.604253&mlon=120.994314#map=16/14.604253/120.994314",
};

function DashboardPage() {
  return (
    <Stack spacing={3}>
      <Card sx={{ ...cardSx, backgroundColor: dashboardPalette.cream }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={3}
            alignItems={{ xs: "flex-start", lg: "center" }}
            justifyContent="space-between"
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
                Overview
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  mt: 1.5,
                  maxWidth: 680,
                  color: dashboardPalette.plum,
                  fontWeight: 700,
                }}
              >
                Awareness and advocacy dashboard for tracking outreach, reports,
                and user activity
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  maxWidth: 720,
                  color: dashboardPalette.text,
                  lineHeight: 1.8,
                }}
              >
                This overview presents a sample snapshot of platform activity,
                including registered users, report progress, and engagement
                trends across the dashboard. The numbers are still sample data,
                but the content is framed around monitoring awareness campaigns,
                advocacy efforts, and community participation.
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            xl: "repeat(4, minmax(0, 1fr))",
          },
          gap: 2,
        }}
      >
        {statCards.map((card) => (
          <Card key={card.title} sx={cardSx}>
            <CardContent sx={{ p: 3 }}>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Box>
                  <Typography
                    sx={{ color: dashboardPalette.text, opacity: 0.72 }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      mt: 1,
                      color: dashboardPalette.plum,
                      fontWeight: 700,
                    }}
                  >
                    {card.value}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1.5,
                      color: dashboardPalette.rose,
                      fontSize: "0.9rem",
                    }}
                  >
                    {card.subtitle}
                  </Typography>
                </Box>
                <Avatar
                  sx={{
                    bgcolor: dashboardPalette.lilac,
                    color: dashboardPalette.plum,
                    width: 52,
                    height: 52,
                  }}
                >
                  {card.icon}
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Card sx={cardSx}>
        <CardContent sx={{ p: 3 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            sx={{ mb: 2.5 }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ color: dashboardPalette.plum, fontWeight: 700 }}
              >
                {locationMap.title}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mt: 1, color: dashboardPalette.text, opacity: 0.75 }}
              >
                <LocationOnOutlinedIcon fontSize="small" />
                <Typography>{locationMap.address}</Typography>
              </Stack>
            </Box>

            <Chip
              component="a"
              href={locationMap.viewUrl}
              target="_blank"
              rel="noreferrer"
              clickable
              icon={<OpenInNewOutlinedIcon />}
              label="Open map"
              sx={{
                backgroundColor: dashboardPalette.cream,
                color: dashboardPalette.plum,
                fontWeight: 700,
                "& .MuiChip-icon": {
                  color: dashboardPalette.plum,
                },
              }}
            />
          </Stack>

          <Box
            sx={{
              height: { xs: 300, md: 380 },
              overflow: "hidden",
              borderRadius: "18px",
              border: `1px solid ${dashboardPalette.lilac}`,
              backgroundColor: dashboardPalette.cream,
            }}
          >
            <Box
              component="iframe"
              title={locationMap.title}
              src={locationMap.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{
                display: "block",
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </Box>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", xl: "1.4fr 0.9fr" },
          gap: 3,
        }}
      >
        <Card sx={cardSx}>
          <CardContent sx={{ p: 3 }}>
            <Typography
              variant="h6"
              sx={{ color: dashboardPalette.plum, fontWeight: 700 }}
            >
              Quarterly Activity
            </Typography>
            <Typography
              sx={{ mt: 1, color: dashboardPalette.text, opacity: 0.75 }}
            >
              Sample grouped bars adapted from common MUI chart examples.
            </Typography>
            <Box sx={{ mt: 3, overflowX: "auto" }}>
              <BarChart
                height={320}
                colors={[dashboardPalette.plum, dashboardPalette.rose]}
                dataset={quarterlyData}
                xAxis={[{ dataKey: "quarter", scaleType: "band" }]}
                series={[
                  { dataKey: "active", label: "Active" },
                  { dataKey: "archived", label: "Archived" },
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
              Distribution Snapshot
            </Typography>
            <Typography
              sx={{ mt: 1, color: dashboardPalette.text, opacity: 0.75 }}
            >
              Simple pie visualization for summary-level insight.
            </Typography>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <PieChart
                height={280}
                colors={[
                  dashboardPalette.plum,
                  dashboardPalette.rose,
                  dashboardPalette.lilac,
                ]}
                series={[
                  {
                    data: pieData,
                    innerRadius: 45,
                    outerRadius: 95,
                    paddingAngle: 3,
                    cornerRadius: 5,
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
            Recent Reports
          </Typography>
          <Typography
            sx={{ mt: 1, color: dashboardPalette.text, opacity: 0.75 }}
          >
            Quick list view to make the dashboard feel more complete.
          </Typography>

          <Stack divider={<Divider flexItem />} sx={{ mt: 2.5 }}>
            {recentReports.map((report, index) => (
              <Stack
                key={report.title}
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                sx={{ py: 2 }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    sx={{
                      bgcolor:
                        index % 2 === 0
                          ? dashboardPalette.lilac
                          : dashboardPalette.cream,
                      color: dashboardPalette.plum,
                    }}
                  >
                    {index + 1}
                  </Avatar>
                  <Box>
                    <Typography
                      sx={{ color: dashboardPalette.plum, fontWeight: 600 }}
                    >
                      {report.title}
                    </Typography>
                    <Typography
                      sx={{ color: dashboardPalette.text, opacity: 0.7 }}
                    >
                      {report.date}
                    </Typography>
                  </Box>
                </Stack>

                <Chip
                  label={report.status}
                  sx={{
                    backgroundColor:
                      report.status === "Ready"
                        ? dashboardPalette.lilac
                        : report.status === "Draft"
                          ? dashboardPalette.cream
                          : "#F3D6DA",
                    color: dashboardPalette.plum,
                    fontWeight: 700,
                  }}
                />
              </Stack>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default DashboardPage;
