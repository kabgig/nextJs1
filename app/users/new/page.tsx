"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/users")} className="btn btn-primary">
      Create
    </div>
  );
};

export default NewUserPage;
