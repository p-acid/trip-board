import { Button } from "@/shared/ui";

export const HomePage = () => {
  return (
    <div>
      <Button size="default" variant="brand">
        브랜드 버튼
      </Button>
      <Button size="default" variant="destructive">
        경고 버튼
      </Button>
      <Button size="default" variant="link">
        링크 버튼
      </Button>
      <Button size="default" variant="outline">
        아웃라인 버튼
      </Button>
    </div>
  );
};
