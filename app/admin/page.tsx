
import SignIn from "@/components/auth/SignIn"
import SignOut from "@/components/auth/SignOut"
import { auth } from "@/lib/auth"

export default async function Page() {
    const session = await auth()
    if (!session) {
        return <SignIn />
    }
    return (
        <div>
            <SignOut />
        </div>
    )
}