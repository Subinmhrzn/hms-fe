import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { RoleSelectionViewProps } from "./role-selection.types";
import { FormButton } from "@/components/form/form-button";
import { cn } from "@/lib/utils";
import { CardRadioGroup } from "@/components/form/card-radio-group";
import { RoleOptions } from "./role-selection.constants";

export const RoleSelectionView: React.FC<RoleSelectionViewProps> = (props) => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-xl">
        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader>
              <CardTitle>Select your role</CardTitle>
              <CardDescription>
                Start your journey by selecting one of the roles below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={props.onSubmit}>
                <div className="flex flex-col gap-6">
                  <CardRadioGroup
                    control={props.control}
                    name="role"
                    options={RoleOptions}
                  />

                  <div className="flex flex-col gap-3">
                    <FormButton
                      type="submit"
                      className="w-full"
                      loading={props.isUpdatingRole}
                      disabled={props.isUpdatingRole}
                    >
                      Proceed
                    </FormButton>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
