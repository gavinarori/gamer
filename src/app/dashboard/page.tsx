"use client"
import React, { useState,useEffect } from "react";
import Navbar from  "@/components/Navbar";
import { challenge } from "@/utils/data"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Dashboard =  () => {
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (sessionStatus === "unauthenticated") {
      router.push("/login");
    }
  }, [sessionStatus, router]);
  const handleButtonClick = (category: string): void => {
    const randomIndex: number = Math.floor(Math.random() * challenge[category].length);
    setCurrentQuestion(challenge[category][randomIndex]);
    setCategory(category);
  }

  return (
    <section className="bg-white">
      <Navbar />
  <div className="mx-auto max-w-screen-xl px-4 py-[50px] lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <p className="mt-4 sm:text-xl/relaxed">
      {currentQuestion ? currentQuestion : "Click a button to get a challenge!"}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-blue-600 px-12 py-3 cursor-pointer text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          onClick={() => handleButtonClick("truth")}
        >
          Truth
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm cursor-pointer font-medium bg-red-600 shadow  focus:outline-none focus:ring sm:w-auto"
          onClick={() => handleButtonClick("dare")}
        >
          Dare
        </a>
      </div>
    </div>
  </div>
</section>
  );
};

export default Dashboard;
