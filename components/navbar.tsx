import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="bg-zinc-500 shadow-lg py-4 px-8">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          My Website
        </div>
        <div className="space-x-4">
          <Button className="text-white hoover:bg-red-500">
            <a href="/signin">Sign In</a>
          </Button>
          <Button className="bg-rose-500 text-white hover:bg-rose-600">
            <a href="/signup">Sign Up</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
