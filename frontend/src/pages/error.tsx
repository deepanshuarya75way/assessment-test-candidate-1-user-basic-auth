import { Alert, Box, Button, Typography } from "@mui/material";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  let title = "Something went wrong";
  let message = "An unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    title = `Error ${error.status}`;
    message = error.statusText || message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
      }}
    >
      <Box
        maxWidth={480}
        width="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Alert severity="error" sx={{ mb: 3 }}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{message}</Typography>
        </Alert>

        <Box display="flex" gap={2}>
          <Button variant="contained" onClick={() => navigate("/")}>
            Go Home
          </Button>

          <Button variant="outlined" onClick={() => navigate(0)}>
            Retry
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
