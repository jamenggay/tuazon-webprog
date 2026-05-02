export const dashboardPalette = {
  plum: "#5A2A6E",
  rose: "#C97B84",
  lilac: "#D6C6E1",
  cream: "#F5EDE6",
  text: "#2E2E2E",
  white: "#FFFFFF",
};

export const userRows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14, role: "Editor", status: "Active", email: "jon.snow@example.com" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31, role: "Admin", status: "Offline", email: "cersei.lannister@example.com" },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31, role: "Moderator", status: "Active", email: "jaime.lannister@example.com" },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11, role: "Researcher", status: "Pending", email: "arya.stark@example.com" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 34, role: "Admin", status: "Active", email: "daenerys.targaryen@example.com" },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, role: "Analyst", status: "Offline", email: "melisandre@example.com" },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, role: "Editor", status: "Active", email: "ferrara.clifford@example.com" },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, role: "Support", status: "Pending", email: "rossini.frances@example.com" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, role: "Analyst", status: "Active", email: "roxie.harvey@example.com" },
];

// export const userColumns = [
//   { field: "id", headerName: "ID", width: 80 },
//   { field: "firstName", headerName: "First Name", width: 140, editable: true },
//   { field: "lastName", headerName: "Last Name", width: 140, editable: true },
//   { field: "age", headerName: "Age", type: "number", width: 90, editable: true },
//   { field: "role", headerName: "Role", width: 130, editable: true },
//   { field: "status", headerName: "Status", width: 120, editable: true },
//   { field: "email", headerName: "Email", width: 260, editable: true },
//   {
//     field: "fullName",
//     headerName: "Full Name",
//     sortable: false,
//     width: 180,
//     valueGetter: (_, row) => `${row.firstName || ""} ${row.lastName || ""}`.trim(),
//   },
// ];

export const quarterlyData = [
  { quarter: "Q1", active: 4000, archived: 2400 },
  { quarter: "Q2", active: 3000, archived: 1398 },
  { quarter: "Q3", active: 2000, archived: 9800 },
  { quarter: "Q4", active: 2780, archived: 3908 },
];

export const monthlyTraffic = [
  { month: "Jan", visitors: 4000, reports: 2400 },
  { month: "Feb", visitors: 3000, reports: 1398 },
  { month: "Mar", visitors: 2000, reports: 9800 },
  { month: "Apr", visitors: 2780, reports: 3908 },
  { month: "May", visitors: 1890, reports: 4800 },
  { month: "Jun", visitors: 2390, reports: 3800 },
  { month: "Jul", visitors: 3490, reports: 4300 },
];

export const pieData = [
  { id: 0, value: 10, label: "Series A" },
  { id: 1, value: 15, label: "Series B" },
  { id: 2, value: 20, label: "Series C" },
];

export const deviceData = [
  { id: 0, value: 45, label: "Desktop" },
  { id: 1, value: 30, label: "Mobile" },
  { id: 2, value: 25, label: "Tablet" },
];

export const regionData = [
  { region: "North", count: 120 },
  { region: "South", count: 98 },
  { region: "East", count: 86 },
  { region: "West", count: 99 },
  { region: "Central", count: 120 },
];

export const recentReports = [
  { title: "Monthly awareness engagement", status: "Ready", date: "April 21, 2026" },
  { title: "Regional outreach summary", status: "Draft", date: "April 19, 2026" },
  { title: "Community participation chart pack", status: "Ready", date: "April 17, 2026" },
  { title: "Advocacy pulse dashboard", status: "Review", date: "April 15, 2026" },
];
