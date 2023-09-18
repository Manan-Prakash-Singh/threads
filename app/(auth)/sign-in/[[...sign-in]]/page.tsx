import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mx-auto w-full-1 w-max py-5">
      <SignIn />;
    </div>
  )
}