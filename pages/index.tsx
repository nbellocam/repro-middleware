import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: { destination: `/test` },
    props: {},
  };
};

const Index = ({}: {}) => {
  return <></>;
};

export default Index;
