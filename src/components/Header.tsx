import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Navbar() {
  return (
    <div>
    <nav className="  text-cyan-700  lg:16 
       p-10 font-bold border-b-2 border-cyan-700 bg-gray-200" >
      
      <ul className=" justify-around items-center hidden lg:flex  ">
        
        
        <li>
      
          <Link href="/" >Home</Link>
        </li>
        
        <li>
          <Link href="/about" >About</Link>
        </li>
       
        <li>
        <Link href="/contact" >contact</Link>
        </li>
      </ul>

      <Sheet >
  <SheetTrigger className="lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
     strokeLinejoin="round" className="lucide lucide-align-justify">
    <path d="M3 12h18"/>
    <path d="M3 18h18"/><path d="M3 6h18"/></svg></SheetTrigger>
  <SheetContent>
    <SheetHeader >
      
    <nav className=" flex flex-col  justify-center items-center" >
      
      <ul >
        
        
        <li>
      
          <Link href="/" >Home</Link>
        </li>
        
        <li>
          <Link href="/about" >About</Link>
        </li>
       
        <li>
        <Link href="/contact" >contact</Link>
        </li>
      </ul>
    </nav>
    </SheetHeader>
  </SheetContent>
  <SheetTitle />
  <SheetDescription />
</Sheet>

    </nav>



 </div>

  );
}