export type SignupRequestDto = {
  fullName: string;
  email: string;
  password: string;
};

export type SignupResponseDto = {
  uuid: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};
