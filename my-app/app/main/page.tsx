"use client"
import Navbar from 'app/components/Navbar.tsx';
export default function Page(){

    return (
        <div className="flex flex-1">
        <div className="w-1/4 bg-white p-4"><Navbar></Navbar> </div>
        <div className="w-1/2 bg-white p-4">Example</div>
        <div className="w-1/4 bg-white p-4">右侧部分</div>
      </div>
    );
}