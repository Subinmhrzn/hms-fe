import type { HospitalKycViewProps } from "./hospital-kyc.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormButton } from "@/components/form/form-button";
import { InputField } from "@/components/form/input-field";
import { InputFileField } from "@/components/form/input-file-field";

export const HospitalKycView: React.FC<HospitalKycViewProps> = ({
  control,
  onSubmit,
}) => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Hospital KYC</CardTitle>
              <CardDescription>Enter your details</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit}>
                <div className="grid gap-6 grid-cols-3">
                  <InputField
                    control={control}
                    label="Hospital Name"
                    name="hospitalName"
                    placeholder="Grandy Hospital"
                  />
                  <InputField
                    control={control}
                    label="Address"
                    name="address"
                    placeholder="Lazimpat, Kathmandu"
                  />
                  <InputField
                    control={control}
                    label="Phone Number"
                    name="contactNumber"
                    placeholder="98xxxxxxxx"
                  />
                  <InputField
                    control={control}
                    label="Emergency Contact"
                    name="emergencyContact"
                    placeholder="98xxxxxxxx"
                  />
                  <InputField
                    control={control}
                    label="License Number"
                    name="licenseNumber"
                    placeholder="01-234-5678"
                  />
                  <div className="col-start-1">
                    <InputFileField
                      control={control}
                      label="License Image"
                      name="licenseDocumentUrl"
                    />
                  </div>

                  <div className="flex flex-col gap-3 col-span-3 mt-6">
                    <FormButton type="submit" className="w-full">
                      Submit
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
