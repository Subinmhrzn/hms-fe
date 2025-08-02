import { VerificationStatus } from "@/constants/verification-status";
import { PatientKycDetailList } from "../../shared/patient-kyc-detail-list";
import type { MyPatientKycViewProps } from "./my-patient-kyc.types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export const MyPatientKycView: React.FC<MyPatientKycViewProps> = ({
  isLoadingPatientKyc,
  patientKycData,
}) => {
  if (isLoadingPatientKyc) {
    return <>Loading...</>;
  }

  return (
    <div className="py-4">
      <div
        className={cn(
          "py-2 px-4 border-2 border-dashed flex gap-2 items-center justify-between",
          {
            "bg-red-100 border-red-500 text-red-700":
              patientKycData?.status === VerificationStatus.Rejected,
            "bg-green-100 border-green-500 text-green-700":
              patientKycData?.status === VerificationStatus.IsVerified,
            "bg-amber-100 border-amber-500 text-amber-700":
              patientKycData?.status === VerificationStatus.Pending,
          },
        )}
      >
        <div className="flex items-center gap-2">
          <p>{patientKycData?.status}</p>
          {patientKycData?.status === VerificationStatus.Rejected && (
            <p className="text-sm underline">
              ({patientKycData?.rejectedReason})
            </p>
          )}
        </div>
        {patientKycData?.status === VerificationStatus.Rejected && (
          <Button
            variant="destructive"
            onClick={() => toast.success("Too cool for now, coming soon! 😎")}
          >
            Re-submit
          </Button>
        )}
      </div>
      <PatientKycDetailList patientKycData={patientKycData} />
    </div>
  );
};
