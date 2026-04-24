import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { DataGrid } from "@mui/x-data-grid";
import {
  dashboardPalette,
  userColumns,
  userRows,
} from "../../assets/dashboardData";

const cardSx = {
  borderRadius: "24px",
  border: `1px solid ${dashboardPalette.lilac}`,
  backgroundColor: dashboardPalette.white,
  boxShadow: "0 16px 40px rgba(90, 42, 110, 0.08)",
};

const summaryCards = [
  {
    label: "Active",
    value: userRows.filter((row) => row.status === "Active").length,
  },
  {
    label: "Pending",
    value: userRows.filter((row) => row.status === "Pending").length,
  },
  {
    label: "Offline",
    value: userRows.filter((row) => row.status === "Offline").length,
  },
];

function UsersPage() {
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
                Users
              </Typography>
              <Typography
                variant="h4"
                sx={{ mt: 1.5, color: dashboardPalette.plum, fontWeight: 700 }}
              >
                Community user directory for advocates, staff, and platform
                members
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  color: dashboardPalette.text,
                  maxWidth: 700,
                  lineHeight: 1.8,
                }}
              >
                This page shows a sample user management view for people
                involved in the platform, such as administrators, moderators,
                support members, and outreach contributors. The records are
                still demo entries, but the layout is already prepared for real
                user details later on.
              </Typography>
            </Box>

            <Avatar
              sx={{
                width: 58,
                height: 58,
                bgcolor: dashboardPalette.plum,
                color: dashboardPalette.white,
              }}
            >
              <PersonOutlineOutlinedIcon />
            </Avatar>
          </Stack>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, minmax(0, 1fr))" },
          gap: 2,
        }}
      >
        {summaryCards.map((card) => (
          <Card key={card.label} sx={cardSx}>
            <CardContent sx={{ p: 3 }}>
              <Typography sx={{ color: dashboardPalette.text, opacity: 0.75 }}>
                {card.label} Accounts
              </Typography>
              <Typography
                variant="h4"
                sx={{ mt: 1, color: dashboardPalette.plum, fontWeight: 700 }}
              >
                {card.value}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Card sx={cardSx}>
        <CardContent sx={{ p: 3 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
            sx={{ mb: 2 }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ color: dashboardPalette.plum, fontWeight: 700 }}
              >
                Platform Members
              </Typography>
              <Typography
                sx={{ mt: 1, color: dashboardPalette.text, opacity: 0.75 }}
              >
                Sample member records displayed in a cleaner directory-style
                table.
              </Typography>
            </Box>

            <Chip
              label={`${userRows.length} records`}
              sx={{
                backgroundColor: dashboardPalette.lilac,
                color: dashboardPalette.plum,
                fontWeight: 700,
              }}
            />
          </Stack>

          <Box sx={{ width: "100%" }}>
            <DataGrid
              rows={userRows}
              columns={userColumns}
              checkboxSelection
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10]}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5, page: 0 },
                },
              }}
              sx={{
                border: `1px solid ${dashboardPalette.lilac}`,
                borderRadius: "18px",
                backgroundColor: dashboardPalette.white,
                minHeight: 420,
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: dashboardPalette.lilac,
                  color: dashboardPalette.plum,
                  fontWeight: 700,
                },
                "& .MuiDataGrid-cell": {
                  borderColor: "#F0E5F4",
                },
                "& .MuiDataGrid-row:hover": {
                  backgroundColor: "#FBF7FC",
                },
                "& .MuiCheckbox-root.Mui-checked": {
                  color: dashboardPalette.plum,
                },
                "& .MuiTablePagination-root": {
                  color: dashboardPalette.text,
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default UsersPage;
