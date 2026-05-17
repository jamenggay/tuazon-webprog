import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { dashboardPalette } from "../../data/dashboardData";
import { getArticles, saveArticles } from "../../utils/articles";

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
};

const blankArticle = {
  name: "",
  title: "",
  contentText: "",
};

const createSlug = (value) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const DashArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editArticleName, setEditArticleName] = useState("");
  const [form, setForm] = useState(blankArticle);

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  const handleOpen = () => {
    setForm(blankArticle);
    setIsEditing(false);
    setEditArticleName("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setEditArticleName("");
  };

  const handleEdit = (article) => {
    setForm({
      name: article.name,
      title: article.title,
      contentText: article.content.join("\n\n"),
    });
    setEditArticleName(article.name);
    setIsEditing(true);
    setOpen(true);
  };

  const handleDelete = (name) => {
    const nextArticles = articles.filter((article) => article.name !== name);
    setArticles(nextArticles);
    saveArticles(nextArticles);
  };

  const handleSave = (event) => {
    event.preventDefault();

    const articleName = form.name || createSlug(form.title);
    const nextArticle = {
      name: createSlug(articleName),
      title: form.title,
      content: form.contentText
        .split("\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean),
    };

    const nextArticles = isEditing
      ? articles.map((article) =>
          article.name === editArticleName ? nextArticle : article,
        )
      : [...articles, nextArticle];

    setArticles(nextArticles);
    saveArticles(nextArticles);
    handleClose();
  };

  const columns = [
    { field: "title", headerName: "Title", flex: 1, minWidth: 260 },
    { field: "name", headerName: "Slug", flex: 1, minWidth: 220 },
    {
      field: "paragraphs",
      headerName: "Paragraphs",
      width: 120,
      valueGetter: (_, row) => row.content.length,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 220,
      sortable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => handleEdit(row)}
            sx={outlinedButtonSx}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="outlined"
            onClick={() => handleDelete(row.name)}
            sx={outlinedButtonSx}
          >
            Delete
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
                Articles
              </Typography>
              <Typography
                variant="h4"
                sx={{ mt: 1.5, color: dashboardPalette.plum, fontWeight: 700 }}
              >
                Dashboard article management
              </Typography>
              <Typography sx={{ mt: 2, color: dashboardPalette.text }}>
                Articles saved here are shown on the public ArticleListPage.
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{
                ...primaryButtonSx,
                ml: { md: "auto" },
                flexShrink: 0,
                alignSelf: { xs: "flex-start", md: "flex-start" },
              }}
            >
              Add Article
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ ...cardSx, minWidth: 0, overflow: "hidden" }}>
        <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
          {articles.length ? (
            <Box sx={{ height: 520, width: "100%" }}>
              <DataGrid
                rows={articles}
                columns={columns}
                getRowId={(row) => row.name}
                disableRowSelectionOnClick
                pageSizeOptions={[5, 10]}
                initialState={{
                  pagination: { paginationModel: { pageSize: 5, page: 0 } },
                }}
              />
            </Box>
          ) : (
            <Alert severity="info">No articles found.</Alert>
          )}
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <Box component="form" onSubmit={handleSave}>
          <DialogTitle>{isEditing ? "Edit Article" : "Add Article"}</DialogTitle>
          <DialogContent dividers>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <TextField
                label="Title"
                value={form.title}
                onChange={(event) =>
                  setForm({ ...form, title: event.target.value })
                }
                fullWidth
                required
                sx={textFieldSx}
              />
              <TextField
                label="Slug"
                value={form.name}
                onChange={(event) =>
                  setForm({ ...form, name: event.target.value })
                }
                fullWidth
                sx={textFieldSx}
              />
              <TextField
                label="Content"
                value={form.contentText}
                onChange={(event) =>
                  setForm({ ...form, contentText: event.target.value })
                }
                fullWidth
                required
                multiline
                rows={8}
                sx={textFieldSx}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} sx={outlinedButtonSx}>
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

export default DashArticleListPage;
