"use client";

export default function Home() {
  return (
    <main className="relative h-screen">
      <h1>Heading</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "b" }, { name: "c" }, { name: "a" }];
          const sorted = _.sortBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}
