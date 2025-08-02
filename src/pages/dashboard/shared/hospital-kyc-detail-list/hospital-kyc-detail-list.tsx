import type { HospitalKycDetailListProps } from "./hospital-kyc-detail-list.types";

export const HospitalKycDetailList: React.FC<HospitalKycDetailListProps> = ({
  hospitalKycData,
}) => {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-[auto_auto_1fr] gap-4">
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Hospital Name</p>
          <span>:</span>
          <p>{hospitalKycData?.hospitalName}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>License Number</p>
          <span>:</span>
          <p>{hospitalKycData?.licenseNumber}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Contact Number</p>
          <span>:</span>
          <p>{hospitalKycData?.contactNumber}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Emergency Contact</p>
          <span>:</span>
          <p>{hospitalKycData?.emergencyContact}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>Address</p>
          <span>:</span>
          <p>{hospitalKycData?.address}</p>
        </div>
        <div className="grid grid-cols-subgrid col-span-3">
          <p>License Document</p>
          <span>:</span>
          <img
            src={hospitalKycData?.licenseDocumentUrl}
            alt="License Image"
            className="max-w-60 h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
