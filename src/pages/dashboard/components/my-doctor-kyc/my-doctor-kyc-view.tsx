import { VerificationStatus } from "@/constants/verification-status";
import { DoctorKycDetailList } from "../../shared/doctor-kyc-detail-list";

import type { MyDoctorKycViewProps } from "./my-doctor-kyc.types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export const MyDoctorKycView: React.FC<MyDoctorKycViewProps> = ({
  isLoadingDoctorKyc,
  doctorKycData,
}) => {
  if (isLoadingDoctorKyc) {
    return <>Loading...</>;
  }

  return (
    <div className="py-4">
      <div
        className={cn(
          "py-2 px-4 border-2 border-dashed flex gap-2 items-center justify-between",
          {
            "bg-red-100 border-red-500 text-red-700":
              doctorKycData?.status === VerificationStatus.Rejected,
            "bg-green-100 border-green-500 text-green-700":
              doctorKycData?.status === VerificationStatus.IsVerified,
            "bg-amber-100 border-amber-500 text-amber-700":
              doctorKycData?.status === VerificationStatus.Pending,
          },
        )}
      >
        <div className="flex items-center gap-2">
          <p>{doctorKycData?.status}</p>
          {doctorKycData?.status === VerificationStatus.Rejected && (
            <p className="text-sm underline">
              ({doctorKycData?.rejectedReason})
            </p>
          )}
        </div>
        {doctorKycData?.status === VerificationStatus.Rejected && (
          <Button
            variant="destructive"
            onClick={() => toast.success("Too cool for now, coming soon! 😎")}
          >
            Re-submit
          </Button>
        )}
      </div>
      <DoctorKycDetailList doctorKycData={doctorKycData} />
    </div>
  );
};
