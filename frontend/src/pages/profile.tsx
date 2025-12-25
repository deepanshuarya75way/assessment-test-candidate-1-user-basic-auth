import ChangePassword from "@/components/ChangePassword";
import UserProfile from "@/components/UserProfile";
import { Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";

import { api } from "@/services/api";
import { store } from "@/store/store";

export const profileLoader = async () => {
  // dispatch RTK Query manually
  const result = await store.dispatch(api.endpoints.me.initiate());

  if ("error" in result) {
    throw new Response("Profile not found", { status: 404 });
  }

  return result.data;
};

const Profile = () => {
  const { data } = useLoaderData<{ data: User }>();

  return (
    <Box>
      <UserProfile data={data} />
      <ChangePassword user={data} />
    </Box>
  );
};

export default Profile;
