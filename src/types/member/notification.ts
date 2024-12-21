export interface Notification {
  createdAt: string;
  id: number;
  message: string;
  notificationSender: {
    birth: string;
    email: string;
    id: number;
    imageUrl: string;
    name: string;
    role: string;
    sex: string;
  };
  read: false;
  relatedData: {
    centerFirstRegistrationMonth: string;
    id: number;
    infoInputStatus: string;
    note: string;
    registrationAllowedStatus: string;
    registrationStatus: string;
    remainingPtCount: number;
    totalPtCount: number;
  };
  type: string;
}
