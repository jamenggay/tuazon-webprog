import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { DataGrid } from "@mui/x-data-grid";
import { dashboardPalette } from "../../data/dashboardData";
import { createUser, fetchUsers, updateUser } from "../../../UserService";

const types = ["admin", "editor", "viewer"];
const genders = ["male", "female", "other"];
const statuses = ["active", "inactive"];

const cardSx = {
  borderRadius: "24px",
  border: `1px solid ${dashboardPalette.lilac}`,
  backgroundColor: dashboardPalette.white,
  boxShadow: "0 16px 40px rgba(90, 42, 110, 0.08)",
};

const primaryButtonSx = {
  borderRadius: "999px",
  height: 36,
  minHeight: 36,
  maxHeight: 36,
  px: 2,
  py: 0,
  backgroundColor: dashboardPalette.plum,
  color: dashboardPalette.white,
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  lineHeight: 1,
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  boxShadow: "0 10px 22px rgba(90, 42, 110, 0.2)",
  "&:hover": {
    backgroundColor: "#4B215D",
    boxShadow: "0 12px 26px rgba(90, 42, 110, 0.24)",
  },
};

const outlinedButtonSx = {
  borderRadius: "999px",
  borderColor: dashboardPalette.lilac,
  color: dashboardPalette.plum,
  fontWeight: 700,
  "&:hover": {
    borderColor: dashboardPalette.rose,
    backgroundColor: dashboardPalette.cream,
  },
};

const filterButtonSx = {
  ...outlinedButtonSx,
  px: 2.5,
  py: 1,
  fontSize: "0.78rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

const dataGridSx = {
  minWidth: 0,
  border: 0,
  color: dashboardPalette.text,
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: dashboardPalette.cream,
    color: dashboardPalette.plum,
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: 700,
  },
  "& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader": {
    outline: "none",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "#FCF8FD",
  },
};

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    backgroundColor: dashboardPalette.white,
    "& fieldset": {
      borderColor: dashboardPalette.lilac,
    },
    "&:hover fieldset": {
      borderColor: dashboardPalette.rose,
    },
    "&.Mui-focused fieldset": {
      borderColor: dashboardPalette.plum,
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: dashboardPalette.plum,
  },
};

const blankForm = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  contactNumber: "",
  email: "",
  type: "",
  username: "",
  password: "",
  address: "",
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : "";

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(blankForm);
  const [showPassword, setShowPassword] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const loadUsers = async () => {
    try {
      setLoading(true);
      const { data } = await fetchUsers();
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const openModal = () => {
    setIsEditing(false);
    setForm({ ...blankForm });
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setIsEditing(false);
    setEditUserId(null);
    setShowPassword(false);
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user._id === id);

    if (userToEdit) {
      setForm({
        ...userToEdit,
        password: "",
      });

      setEditUserId(id);
      setIsEditing(true);
      setOpen(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (isEditing) {
        const updatedUser = { ...form };

        if (!updatedUser.password) {
          delete updatedUser.password;
        }

        await updateUser(editUserId, updatedUser);
      } else {
        await createUser(form);
      }

      loadUsers();
      closeModal();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const toggleStatus = async (id, isActive) => {
    try {
      await updateUser(id, { isActive: !isActive });
      loadUsers();
    } catch (error) {
      console.error("Error toggling user status:", error);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setTypeFilter("");
    setGenderFilter("");
    setStatusFilter("");
  };

  const filteredUsers = users.filter((user) => {
    const searchValue = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !searchValue ||
      [user.firstName, user.lastName, user.email, user.username].some((value) =>
        String(value).toLowerCase().includes(searchValue),
      );
    const matchesType = !typeFilter || user.type === typeFilter;
    const matchesGender = !genderFilter || user.gender === genderFilter;
    const matchesStatus =
      !statusFilter ||
      (statusFilter === "active" ? user.isActive : !user.isActive);

    return matchesSearch && matchesType && matchesGender && matchesStatus;
  });

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    fullWidth: true,
    sx: textFieldSx,
    ...extra,
  });

  const columns = [
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 1,
      minWidth: 170,
      valueGetter: (_, row) => `${row.firstName} ${row.lastName}`.trim(),
    },
    { field: "username", headerName: "Username", minWidth: 150 },
    { field: "age", headerName: "Age", width: 90 },
    {
      field: "gender",
      headerName: "Gender",
      minWidth: 110,
      valueGetter: (_, row) => labelize(row.gender),
    },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      minWidth: 160,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.1,
      minWidth: 220,
    },
    {
      field: "type",
      headerName: "Type",
      minWidth: 120,
      valueGetter: (_, row) => labelize(row.type),
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 120,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? "Active" : "Inactive"}
          color={row.isActive ? "success" : "default"}
          variant={row.isActive ? "filled" : "outlined"}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 220,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => handleEdit(row._id)}
            sx={outlinedButtonSx}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color={row.isActive ? "warning" : "success"}
            onClick={() => toggleStatus(row._id, row.isActive)}
            sx={{
              borderRadius: "999px",
              fontWeight: 700,
              boxShadow: "none",
              backgroundColor: row.isActive
                ? dashboardPalette.rose
                : dashboardPalette.plum,
              color: dashboardPalette.white,
              "&:hover": {
                backgroundColor: row.isActive ? "#B66D76" : "#4B215D",
                boxShadow: "none",
              },
            }}
          >
            {row.isActive ? "Disable" : "Activate"}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Stack spacing={3} sx={{ width: "100%", minWidth: 0 }}>
      <Card sx={{ ...cardSx, backgroundColor: dashboardPalette.cream }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "stretch", md: "flex-start" }}
            spacing={3}
            sx={{ width: "100%" }}
          >
            <Box sx={{ flex: 1, minWidth: 0 }}>
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
                sx={{
                  mt: 1.5,
                  color: dashboardPalette.plum,
                  fontWeight: 700,
                }}
              >
                Community account management
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  maxWidth: 720,
                  color: dashboardPalette.text,
                  lineHeight: 1.8,
                }}
              >
                Review registered users, update account details, and manage
                access with styling aligned to the dashboard overview.
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={() => openModal()}
              sx={{
                ...primaryButtonSx,
                ml: { md: "auto" },
                flexShrink: 0,
                alignSelf: { xs: "flex-start", md: "flex-start" },
              }}
            >
              Add User
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ ...cardSx, minWidth: 0, overflow: "hidden" }}>
        <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
          <Stack spacing={2} sx={{ mb: 2 }}>
            <Stack
              direction={{ xs: "column", lg: "row" }}
              spacing={2}
              alignItems={{ xs: "stretch", lg: "center" }}
            >
              <TextField
                label="Search users"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search first name, last name, email, or username"
                sx={{ ...textFieldSx, flex: 1.5 }}
              />
              <TextField
                label="Type"
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value)}
                select
                sx={{ ...textFieldSx, flex: 1 }}
              >
                <MenuItem value="">All Types</MenuItem>
                {types.map((type) => (
                  <MenuItem key={type} value={type}>
                    {labelize(type)}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Gender"
                value={genderFilter}
                onChange={(event) => setGenderFilter(event.target.value)}
                select
                sx={{ ...textFieldSx, flex: 1 }}
              >
                <MenuItem value="">All Genders</MenuItem>
                {genders.map((gender) => (
                  <MenuItem key={gender} value={gender}>
                    {labelize(gender)}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Status"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                select
                sx={{ ...textFieldSx, flex: 1 }}
              >
                <MenuItem value="">All Statuses</MenuItem>
                {statuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {labelize(status)}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="outlined"
                onClick={clearFilters}
                sx={{ ...filterButtonSx, alignSelf: { lg: "stretch" } }}
              >
                Clear
              </Button>
            </Stack>

            <Typography sx={{ color: dashboardPalette.text, opacity: 0.75 }}>
              Showing {filteredUsers.length} of {users.length} users
            </Typography>
          </Stack>

          {users.length ? (
            <Box
              sx={{ height: { xs: 460, sm: 520 }, width: "100%", minWidth: 0 }}
            >
              <DataGrid
                rows={filteredUsers}
                columns={columns}
                getRowId={(row) => row._id}
                loading={loading}
                disableRowSelectionOnClick
                pageSizeOptions={[5, 10]}
                initialState={{
                  pagination: { paginationModel: { pageSize: 5, page: 0 } },
                }}
                sx={dataGridSx}
              />
            </Box>
          ) : (
            <Alert severity="info">
              No users found. Use Add User to create your first record.
            </Alert>
          )}

          {users.length && !filteredUsers.length ? (
            <Alert
              severity="info"
              sx={{
                mt: 2,
                borderRadius: "14px",
                backgroundColor: dashboardPalette.cream,
                color: dashboardPalette.plum,
              }}
            >
              No users match the current search or filters.
            </Alert>
          ) : null}
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: { xs: 0, sm: "24px" },
            border: { xs: 0, sm: `1px solid ${dashboardPalette.lilac}` },
            boxShadow: "0 18px 46px rgba(90, 42, 110, 0.16)",
          },
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle
            sx={{
              backgroundColor: dashboardPalette.cream,
              color: dashboardPalette.plum,
              fontWeight: 700,
            }}
          >
            {isEditing ? "Edit User" : "Add User"}
          </DialogTitle>

          <DialogContent
            dividers
            sx={{
              px: { xs: 2, sm: 3 },
              borderColor: dashboardPalette.lilac,
              backgroundColor: "#FCF8FD",
            }}
          >
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("firstName", "First Name")} />
                <TextField {...fieldProps("lastName", "Last Name")} />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("age", "Age")} />
                <TextField
                  {...fieldProps("gender", "Gender", { select: true })}
                >
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {labelize(gender)}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("contactNumber", "Contact Number")} />
                <TextField
                  {...fieldProps("email", "Email Address", {
                    type: "email",
                  })}
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("type", "Type", { select: true })}>
                  {types.map((type) => (
                    <MenuItem key={type} value={type}>
                      {labelize(type)}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField {...fieldProps("username", "Username")} />
              </Stack>

              <TextField
                {...fieldProps("password", "Password", {
                  type: showPassword ? "text" : "password",
                  slotProps: {
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={() => setShowPassword((prev) => !prev)}
                            onMouseDown={(event) => event.preventDefault()}
                            aria-label={
                              showPassword ? "Hide password" : "Show password"
                            }
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  },
                })}
              />

              <TextField
                {...fieldProps("address", "Address", {
                  multiline: true,
                  rows: 3,
                })}
              />

              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: dashboardPalette.plum,
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: dashboardPalette.lilac,
                        },
                    }}
                  />
                }
                label={
                  form.isActive
                    ? "User status: Active"
                    : "User status: Inactive"
                }
              />
            </Stack>
          </DialogContent>

          <DialogActions
            sx={{ px: 3, py: 2, backgroundColor: dashboardPalette.white }}
          >
            <Button onClick={closeModal} sx={outlinedButtonSx}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" sx={primaryButtonSx}>
              {isEditing ? "Save Changes" : "Add"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Stack>
  );
};

export default UsersPage;
