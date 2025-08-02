import { Loader2Icon } from "lucide-react";
import type { HospitalKycDetailViewProps } from "./hospital-kyc-detail.types";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Route } from "@/routes";
import { VerificationStatus } from "@/constants/verification-status";
import { ConfirmationDialog } from "@/components/confirmation-dialog";
import { Badge } from "@/components/ui/badge";
import { AppDialog } from "@/components/app-dialog";
import { InputField } from "@/components/form/input-field";
import { HospitalKycDetailList } from "../../shared/hospital-kyc-detail-list";

export const HospitalKycDetailView: React.FC<HospitalKycDetailViewProps> = ({
  isLoadingHospitalKycData,
  hospitalKycData,
  isVerifyingHospitalKyc,
  verifyHospitalKycStatus,
  control,
  onReject,
}) => {
  if (isLoadingHospitalKycData) {
    return (
      <div className="w-full h-48 grid place-items-center">
        <div className="grid place-items-center gap-2">
          <Loader2Icon className="animate-spin" />
          Loading...
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Hospital KYC Details</h2>
          <div className="flex gap-2">
            {hospitalKycData?.status === VerificationStatus.Pending && (
              <>
                <ConfirmationDialog
                  button={<Button>Accept</Button>}
                  dialogTitle="Confirm Accept?"
                  dialogDescription="Are you sure you want to accept this doctor's KYC?"
                  isConfirming={isVerifyingHospitalKyc}
                  onConfirm={() =>
                    verifyHospitalKycStatus(VerificationStatus.IsVerified)
                  }
                />
                <AppDialog
                  button={<Button variant="destructive">Reject</Button>}
                  dialogTitle="Confirm Reject?"
                  dialogDescription="Are you sure you want to reject this doctor's KYC?"
                  onConfirm={onReject}
                  isConfirming={isVerifyingHospitalKyc}
                >
                  <InputField
                    control={control}
                    label="Rejected reason"
                    name="rejectedReason"
                  />
                </AppDialog>
              </>
            )}
            {hospitalKycData?.status === VerificationStatus.IsVerified && (
              <Badge className="bg-green-400 text-foreground">Accepted</Badge>
            )}
            {hospitalKycData?.status === VerificationStatus.Rejected && (
              <Badge className="bg-red-400 text-foreground">Rejected</Badge>
            )}
            <Button variant="outline" asChild>
              <Link to={Route.Dashboard.HospitalKyc}>Cancel</Link>
            </Button>
          </div>
        </div>
        <HospitalKycDetailList hospitalKycData={hospitalKycData} />
      </div>
    </>
  );
};
