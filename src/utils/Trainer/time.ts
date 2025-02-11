export const isTimeOverlapping = (
  start1: string,
  end1: string,
  start2: string,
  end2: string,
) => {
  const [s1, e1] = [start1, end1].map(t => parseInt(t.replace(":", "")));
  const [s2, e2] = [start2, end2].map(t => parseInt(t.replace(":", "")));
  return s1 < e2 && e1 > s2;
};
