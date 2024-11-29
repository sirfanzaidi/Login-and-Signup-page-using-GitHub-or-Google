import { SessionWrapper } from "@/component/SessionWrapper";
import SignInComponent from "@/component/login/LoginComponents";
import SignOutComponent from "@/component/login/SignOutComponents";
import {auth} from "./lib/auth"


export default async function Home() {
  const session = await auth()
  const isAuthenticated = !!session ?.user
  return (
        <div>
          <SessionWrapper>
            {isAuthenticated ? <SignOutComponent/> : <SignInComponent/>}
          </SessionWrapper>
        </div>
  );
}
