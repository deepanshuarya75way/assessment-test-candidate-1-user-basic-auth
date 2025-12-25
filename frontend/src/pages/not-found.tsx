import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
      }}
    >
      <Typography variant="h1" fontWeight={700}>
        404
      </Typography>

      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        Sorry, the page you’re looking for doesn’t exist.
      </Typography>

      <Button component={RouterLink} to="/" variant="contained" size="large">
        Go to Home
      </Button>
    </Box>
  );
}
