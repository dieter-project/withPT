export const convertGoal = (type: string, value: string) => {
  if (type === "diet") {
    switch (value) {
      case "Carb_Protein_Fat":
        return "탄단지";
      case "PROTEIN":
        return "단백질";
      case "DIET":
        return "다이어트";
      case "KETO":
        return "키토";
    }
  } else if (type === "exercise") {
    switch (value) {
      case "FIRST_TIME":
        return "운동은 처음이라 잘 모르겠어요";
      case "ONCE_TWICE_A_WEEK":
        return "주 1~2회";
      case "THREE_TIMES_A_WEEK_OR_MORE":
        return "주 3회 이상";
      case "FIVE_TIMES_A_WEEK_OR_MORE":
        return "주 5회 이상";
      case "EVERYDAY":
        return "매일 운동할래요";
    }
  }
}
