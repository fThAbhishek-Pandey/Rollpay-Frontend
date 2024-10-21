import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class=" flex justify-between">
        <div class="flex gap-2">
            <h1 class="text-4xl">Admin Panal</h1>
        </div>
        <button class="hidden md:block text-2xl bg-indigo-500 rounded-md px-2 cursor-pointer">Logout</button>
        <div class="md:hidden">
            <a class="text-4xl " href="#">&#8801;</a>
        </div>
    </nav>
    </div>
  )
}

export default Navbar