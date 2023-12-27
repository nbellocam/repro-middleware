import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

export interface PageProps {
  callbackUrl: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      callbackUrl: context.query.callbackUrl ?? "/",
    },
  };
};

const Test: FC<PageProps> = ({ callbackUrl }) => {
  const router = useRouter();

  return (
    <main>
      <div>TEST index</div>
      <div>locale: {router.locale}</div>
      <div>callbackUrl: {callbackUrl}</div>
    </main>
  );
};

export default Test;
