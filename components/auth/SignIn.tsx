
import { signIn } from "@/lib/auth"
export default async function SignIn() {
    return (
        <form className="m-auto justify-center items-center rounded-xl border-2 border-pink-200 p-3"
            action={async () => {
                "use server"
                await signIn("google")
            }}
        >
            <button className="text-black text-2xl" type="submit">sign in with google!</button>
        </form>
    )
} 