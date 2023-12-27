import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  if (!!query?.pathTest) {
    return {
      redirect: { destination: `/test/path` },
      props: {},
    };
  }
  
  return {
    redirect: { destination: `/test` },
    props: {},
  };
};

const Index = ({}: {}) => {
  return <></>;
};

export default Index;
