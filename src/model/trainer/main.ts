import { apiClient } from "@/lib/trainer/api/api-client";

export const getMontlyMemberStatics = async (date: string) => {
  const { data: res } = await apiClient.get(
    `api/v1/personal-trainings/members-statistics?date=${date}`,
  );
  return res;
};
