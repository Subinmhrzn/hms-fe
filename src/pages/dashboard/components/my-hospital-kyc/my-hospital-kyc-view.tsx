import { VerificationStatus } from "@/constants/verification-status";
import { HospitalKycDetailList } from "../../shared/hospital-kyc-detail-list";

import type { MyHospitalKycViewProps } from "./my-hospital-kyc.types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export const MyHospitalKycView: React.FC<MyHospitalKycViewProps> = ({
  isLoadingHospitalKyc,
  hospitalKycData,
}) => {
  if (isLoadingHospitalKyc) {
    return <>Loading...</>;
  }

  return (
    <div className="py-4">
      <div
        className={cn(
          "py-2 px-4 border-2 border-dashed flex gap-2 items-center justify-between",
          {
            "bg-red-100 border-red-500 text-red-700":
              hospitalKycData?.status === VerificationStatus.Rejected,
            "bg-green-100 border-green-500 text-green-700":
              hospitalKycData?.status === VerificationStatus.IsVerified,
            "bg-amber-100 border-amber-500 text-amber-700":
              hospitalKycData?.status === VerificationStatus.Pending,
          },
        )}
      >
        <div className="flex items-center gap-2">
          <p>{hospitalKycData?.status}</p>
          {hospitalKycData?.status === VerificationStatus.Rejected && (
            <p className="text-sm underline">
              ({hospitalKycData?.rejectedReason})
            </p>
          )}
        </div>
        {hospitalKycData?.status === VerificationStatus.Rejected && (
          <Button
            variant="destructive"
            onClick={() => toast.success("Too cool for now, coming soon! 😎")}
          >
            Re-submit
          </Button>
        )}
      </div>
      <HospitalKycDetailList hospitalKycData={hospitalKycData} />
    </div>
  );
};
