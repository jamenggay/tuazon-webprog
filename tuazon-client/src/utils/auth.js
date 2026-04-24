// Fake credentials database
export const FAKE_USERS = [
  {
    id: 1,
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User",
    role: "admin",
  },
  {
    id: 2,
    email: "user@example.com",
    password: "user123",
    name: "John Doe",
    role: "user",
  },
  {
    id: 3,
    email: "test@example.com",
    password: "test123",
    name: "Test User",
    role: "user",
  },
];

// Validate credentials
export const validateCredentials = (email, password) => {
  const user = FAKE_USERS.find(
    (u) => u.email === email && u.password === password,
  );
  return user ? { success: true, user } : { success: false, user: null };
};

// Login function
export const login = (email, password) => {
  const result = validateCredentials(email, password);
  if (result.success) {
    // Store user info in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: result.user.id,
        email: result.user.email,
        name: result.user.name,
        role: result.user.role,
      }),
    );
    localStorage.setItem("isAuthenticated", "true");
    return { success: true, message: "Login successful" };
  }
  return { success: false, message: "Invalid email or password" };
};

// Logout function
export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("isAuthenticated");
};

// Get current user
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};
