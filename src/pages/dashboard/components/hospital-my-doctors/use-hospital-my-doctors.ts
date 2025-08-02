import { useGetAddedDoctorsQuery } from "@/api/hospital-doctor/hospital-doctor.queries";

export const useHospitalMyDoctors = () => {
  const { data: addedDoctors = [], isLoading: isAddedDoctorsLoading } =
    useGetAddedDoctorsQuery();

  return {
    addedDoctors,
    isAddedDoctorsLoading,
  };
};
