export const Role = {
  Patient: "patient",
  Doctor: "doctor",
  HospitalAdmin: "hospitalAdmin",
  SystemAdmin: "systemAdmin",
} as const;

export type RoleType = (typeof Role)[keyof typeof Role];

export const Permissions = {
  READ_PATIENTS: "read:patients",
  CREATE_PATIENTS: "create:patients",
  UPDATE_PATIENTS: "update:patients",
  DELETE_PATIENTS: "update:patients",

  READ_DOCTORS: "read:doctors",
  CREATE_DOCTORS: "create:doctors",
  UPDATE_DOCTORS: "update:doctors",
  DELETE_DOCTORS: "update:doctors",

  READ_HOSPITALS: "read:hospitals",
  CREATE_HOSPITALS: "create:hospitals",
  UPDATE_HOSPITALS: "update:hospitals",
  DELETE_HOSPITALS: "update:hospitals",
} as const;

export type PermissionType = (typeof Permissions)[keyof typeof Permissions];

export const RolePermissions = {
  [Role.SystemAdmin]: [
    Permissions.READ_PATIENTS,
    Permissions.CREATE_PATIENTS,
    Permissions.UPDATE_PATIENTS,
    Permissions.DELETE_PATIENTS,

    Permissions.READ_DOCTORS,
    Permissions.CREATE_DOCTORS,
    Permissions.UPDATE_DOCTORS,
    Permissions.DELETE_DOCTORS,

    Permissions.READ_HOSPITALS,
    Permissions.CREATE_HOSPITALS,
    Permissions.UPDATE_HOSPITALS,
    Permissions.DELETE_HOSPITALS,
  ],
};
