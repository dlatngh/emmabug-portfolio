import { signOut } from "@/lib/auth"

export default function SignOut() {
    return (
        <form className="m-auto justify-center items-center rounded-xl border-2 border-pink-200 p-3"
            action={async () => {
                "use server"
                await signOut()
            }}
        >
            <button className="text-black text-2xl">sign out</button>
        </form>
    )
}