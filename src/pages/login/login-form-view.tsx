import { cn } from "@/lib/utils";
import type { LoginFormViewProps } from "./login.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormButton } from "@/components/form/form-button";
import { InputField } from "@/components/form/input-field";
import { Link } from "react-router";
import { Route } from "@/routes";

export const LoginFormView: React.FC<LoginFormViewProps> = ({
  control,
  isLoggingIn,
  onSubmit,
}) => {
  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter the details below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              <InputField
                control={control}
                label="Email"
                name="email"
                placeholder="john@doe.com"
              />
              <InputField
                control={control}
                label="Password"
                name="password"
                type="password"
                placeholder="************"
              />

              <div className="flex flex-col gap-3">
                <FormButton
                  type="submit"
                  className="w-full"
                  loading={isLoggingIn}
                  disabled={isLoggingIn}
                >
                  Login
                </FormButton>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                to={Route.Auth.Signup}
                className="underline underline-offset-4"
              >
                Signup
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
