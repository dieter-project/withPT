import { useRouter } from "next/router";

const step6 = () => {
  const router = useRouter();
  const { name } = router.query;

  // ...

  return (
    <div>
      <h1>선택한 헬스장: {name}</h1>
      <p>Selected Gym: {selectedGym.name}</p>
      {/* 다른 정보도 필요한 경우 추가 */}
    </div>
  );
};

export default step6;
