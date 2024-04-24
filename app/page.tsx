import React from "react";
import Hero from "@/components/main/Hero";

export default function Page() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col h-[850px] gap-20">
                <Hero />
            </div>
        </main>
    );
}