import ProfileHandler from "../components/profile/ProfileHandler";
import { getSession } from "next-auth/react";

const Profile = () => {
  return <ProfileHandler />;
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return { redirect: { destination: "/auth/login", permanent: false } };
  }

  return { props: {} };
}

export default Profile;
