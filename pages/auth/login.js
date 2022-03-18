import FormLogin from "../../components/form/FormLogin";
import { getSession } from "next-auth/react";

const Login = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-sm font-Yekan text-monako-3 bg-monako-2">
      <div className="w-5/6 sm:w-1/3 ">
        <FormLogin />
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Login;
