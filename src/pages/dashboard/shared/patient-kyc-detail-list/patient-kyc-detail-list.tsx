import { formatDate } from "@/utils";
import type { PatientKycDetailListProps } from "./patient-kyc-detail-list.types";

export const PatientKycDetailList: React.FC<PatientKycDetailListProps> = ({
  patientKycData,
}) => {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-[auto_auto_1fr] gap-4">
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Username</p>
          <span>:</span>
          <p>{patientKycData?.username}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Full name</p>
          <span>:</span>
          <p>{patientKycData?.fullName}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Date of birth</p>
          <span>:</span>
          <p>{formatDate(patientKycData?.dob || "")}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Address</p>
          <span>:</span>
          <p>{patientKycData?.address}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Phone Number</p>
          <span>:</span>
          <p>{patientKycData?.phoneNumber}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Emergency Contact</p>
          <span>:</span>
          <p>{patientKycData?.emergencyContact}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Blood Group</p>
          <span>:</span>
          <p>{patientKycData?.bloodGroup}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Document Type</p>
          <span>:</span>
          <p className="capitalize">{patientKycData?.documentType}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Document (Front)</p>
          <span>:</span>
          <img
            src={patientKycData?.documentFrontImageUrl}
            alt="Document (Front)"
            className="max-w-60 h-full object-contain"
          />
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Document (Back)</p>
          <span>:</span>
          <img
            src={patientKycData?.documentBackImageUrl}
            alt="Document (Back)"
            className="max-w-60 h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
