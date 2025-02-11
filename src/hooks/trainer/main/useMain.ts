import { useQuery } from "@tanstack/react-query";
import { getMontlyMemberStatics } from "@/model/trainer/main";

interface MonthlyStats {
  totalMembers: number;
  existingMembers: number;
  reregisteredMembers: number;
  newMembers: number;
}

export const useMontlyMemberStatics = (date: string) => {
  return useQuery<MonthlyStats>({
    queryKey: ["montlyMemberStatics", date],
    queryFn: () => getMontlyMemberStatics(date),
    enabled: Boolean(date),
  });
};
