"use client"

interface Props{
    user : {
        id: string,
        objectID: string,
        username: string,
        name: string,
        bio: string,
        image: string,
    },
    btnTitle: string,
}

export default function AccountProfile({ user, btnTitle } : Props) {
    return (
        <div>
            Account Profile
        </div>
    )
}