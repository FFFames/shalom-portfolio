import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "../components/Portfolio";
import { en } from "../lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Portfolio c={en} />;
}
