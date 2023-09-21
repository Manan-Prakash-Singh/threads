"use client"
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { dark } from '@clerk/themes'

function TopBar(){
    const router = useRouter();
    
    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
                <p className="text-heading3-bold pt-1 text-light-1 max-xs:hidden">Threads</p>
            </Link>
            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton signOutCallback={() => router.push('/sign-in')}>
                            <div className="flex cursor-pointer">
                                <Image 
                                    src="/assets/logout.svg"
                                    alt="logout"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
                <OrganizationSwitcher 
                            appearance={{
                                baseTheme: dark,
                                elements : {
                                    organizationSwitcherTrigger: "py-2 px-3"
                                }
                            }}
                />
            </div>
        </nav>
    )
}

export default TopBar