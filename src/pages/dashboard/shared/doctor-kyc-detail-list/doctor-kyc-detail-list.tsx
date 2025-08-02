import { formatDate } from "@/utils";
import type { DoctorKycDetailListProps } from "./doctor-kyc-detail-list.types";

export const DoctorKycDetailList: React.FC<DoctorKycDetailListProps> = ({
  doctorKycData,
}) => {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-[auto_auto_1fr] gap-4">
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Full name</p>
          <span>:</span>
          <p>{doctorKycData?.fullName}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>License Number</p>
          <span>:</span>
          <p>{doctorKycData?.licenseNumber}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Date of birth</p>
          <span>:</span>
          <p>{formatDate(doctorKycData?.dob || "")}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Address</p>
          <span>:</span>
          <p>{doctorKycData?.address}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Phone Number</p>
          <span>:</span>
          <p>{doctorKycData?.phoneNumber}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Specialization</p>
          <span>:</span>
          <p>{doctorKycData?.specialization}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Experienced Year</p>
          <span>:</span>
          <p>{doctorKycData?.experiencedYear}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Document (Front)</p>
          <span>:</span>
          <img
            src={doctorKycData?.licenseImageUrl}
            alt="License Image"
            className="max-w-60 h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
