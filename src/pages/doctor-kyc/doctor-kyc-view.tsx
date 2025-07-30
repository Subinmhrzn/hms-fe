import type { DoctorKycViewProps } from "./doctor-kyc.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormButton } from "@/components/form/form-button";
import { InputField } from "@/components/form/input-field";
import { DatePickerField } from "@/components/form/date-picker-field";
import { InputFileField } from "@/components/form/input-file-field";
import { TextareaField } from "@/components/form/textarea-field";

export const DoctorKycView: React.FC<DoctorKycViewProps> = ({
  control,
  onSubmit,
}) => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Doctor KYC</CardTitle>
              <CardDescription>Enter your details</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit}>
                <div className="grid gap-6 grid-cols-3">
                  <InputField
                    control={control}
                    label="Full Name"
                    name="fullName"
                    placeholder="John Doe"
                  />
                  <InputField
                    control={control}
                    label="Address"
                    name="address"
                    placeholder="Lazimpat, Kathmandu"
                  />
                  <DatePickerField
                    control={control}
                    name="dob"
                    label="Date of birth"
                  />
                  <InputField
                    control={control}
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="98xxxxxxxx"
                  />
                  <InputField
                    control={control}
                    label="License Number"
                    name="licenseNumber"
                    placeholder="01-234-5678"
                  />
                  <InputField
                    control={control}
                    label="Year(s) of Experience"
                    name="experiencedYear"
                    placeholder="5"
                  />
                  <TextareaField
                    control={control}
                    label="Specialization"
                    name="specialization"
                    placeholder="MBBS in Ontology"
                  />
                  <InputFileField
                    control={control}
                    label="License Image"
                    name="licenseImageUrl"
                  />

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
