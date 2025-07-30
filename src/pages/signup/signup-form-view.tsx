import type { SignupFormViewProps } from "./signup.types";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";
import { Route } from "@/routes";
import { InputField } from "@/components/form/input-field";
import { FormButton } from "@/components/form/form-button";

export const SignupFormView: React.FC<SignupFormViewProps> = ({
  control,
  onSubmit,
  className,
  isSigningUp,
}) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card>
        <CardHeader>
          <CardTitle>Signup for your account</CardTitle>
          <CardDescription>
            Enter the details below to signup for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
              <InputField
                control={control}
                label="Username"
                name="username"
                placeholder="John Doe"
              />
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
                  loading={isSigningUp}
                  disabled={isSigningUp}
                >
                  Signup
                </FormButton>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link
                to={Route.Auth.Login}
                className="underline underline-offset-4"
              >
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
