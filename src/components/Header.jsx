import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="h-16 w-full bg-[#333] text-[#fff]">
        <div className='h-full flex justify-between items-center px-5 lg:container lg:mx-auto'>
            <NavLink className='text-3xl font-bold tracking-widest' to='/'>Beshify🤸</NavLink>
            <ul className='flex gap-x-10'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Header