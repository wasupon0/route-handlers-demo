import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <Link href="http://google.com">test</Link>
    </div>
  );
}
