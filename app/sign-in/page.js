import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div>
      <span>Sign In</span>
      <p>
        Dont have an account? <Link href="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignInPage;
