export const getCategoryBySubtasks = (subtasks) => {
  const total = subtasks.length;
  // 완료된 서브태스크 수에 따라 전체 todo의 category 자동 판별
  const doneCount = subtasks.filter((s) => s.done).length;
  let newCategory = "TODO"; // 기본값
  if (doneCount === total) newCategory = "DONE";
  else if (doneCount > 0) newCategory = "PROGRESS";

  return newCategory;
};
