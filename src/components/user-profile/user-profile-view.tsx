import { ChevronDownIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import type { UserProfileViewProps } from "./user-profile.types";

export const UserProfileView: React.FC<UserProfileViewProps> = ({
  user,
  userInitial,
  onLogout,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <div className="flex justify-center items-center gap-2">
          <Avatar>
            <AvatarFallback>{userInitial}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start text-xs">
            <p>{user?.email}</p>
            <p className="text-muted-foreground text-xs capitalize">
              {user?.role}
            </p>
          </div>
          <ChevronDownIcon size={16} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-1">
        <DropdownMenuItem className="cursor-pointer" onClick={onLogout}>
          <LogOutIcon />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
