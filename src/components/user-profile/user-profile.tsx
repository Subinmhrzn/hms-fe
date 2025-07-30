import { useUserProfile } from "./use-user-profile";
import { UserProfileView } from "./user-profile-view";

export const UserProfile = () => {
  const logic = useUserProfile();
  return <UserProfileView {...logic} />;
};
