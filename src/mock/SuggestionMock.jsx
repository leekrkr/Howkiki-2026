const getTodayDateTime = (time) => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}T${time}:00`;
};

export const mockSuggestions = {
  status: 200,
  message: "건의 사항 목록 조회 성공",

  data: [
    {
      suggestionId: 1,
      category: "서비스",
      content: "직원분들이 친절해서 좋았어요!",
      createdAt: getTodayDateTime("12:46"),
    },
    {
      suggestionId: 2,
      category: "음식",
      content: "음식이 조금 늦게 나왔어요.",
      createdAt: getTodayDateTime("11:32"),
    },
    {
      suggestionId: 3,
      category: "시설",
      content: "테이블 간격이 조금 더 넓었으면 좋겠어요.",
      createdAt: getTodayDateTime("10:21"),
    },
    {
      suggestionId: 4,
      category: "기타",
      content: "매장 분위기가 좋아서 다음에도 방문하고 싶어요.",
      createdAt: getTodayDateTime("09:05"),
    },
  ],
};
