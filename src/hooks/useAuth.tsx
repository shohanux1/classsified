import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

const useAuth = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return { user };
};

export default useAuth;
