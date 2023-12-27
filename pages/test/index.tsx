import { useRouter } from "next/router";
import { FC } from "react";

const Test: FC = () => {
  const router = useRouter();

  return (
    <main className="p-5">
      <div className="p-2">Sample</div>
      <div className="p-2">locale: {router.locale}</div>
    </main>
  );
};

export default Test;
