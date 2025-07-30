import type { PatientKycViewProps } from "./patient-kyc.types";
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
import { SelectField } from "@/components/form/select-field";
import {
  BloodGroupTypeOptions,
  DocumentTypeOptions,
} from "./patient-kyc.constants";
import { InputFileField } from "@/components/form/input-file-field";

export const PatientKycView: React.FC<PatientKycViewProps> = ({
  control,
  onSubmit,
  selectedDocumentLabel,
}) => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Patient KYC</CardTitle>
              <CardDescription>Enter the patient details</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit}>
                <div className="grid gap-6 grid-cols-3">
                  <InputField
                    control={control}
                    label="Username"
                    name="username"
                    placeholder="johnDoe"
                  />
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
                    label="Emergency Contact"
                    name="emergencyContact"
                    placeholder="98xxxxxxxx"
                  />
                  <SelectField
                    control={control}
                    name="bloodGroup"
                    label="Blood Group"
                    options={BloodGroupTypeOptions}
                  />
                  <SelectField
                    control={control}
                    name="documentType"
                    label="Document Type"
                    options={DocumentTypeOptions}
                  />
                  <InputField
                    control={control}
                    label={`${selectedDocumentLabel} Number`}
                    name="documentNumber"
                    placeholder="01231231231231"
                  />
                  <InputFileField
                    control={control}
                    label={`${selectedDocumentLabel} (Front)`}
                    name="documentFrontImageUrl"
                  />
                  <InputFileField
                    control={control}
                    label={`${selectedDocumentLabel} (Back)`}
                    name="documentBackImageUrl"
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
