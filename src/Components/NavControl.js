import { useContext } from "react"
import { Context } from "../Context"

const NavControl = () => {
    const { isNav, setIsNav } = useContext(Context)
    
    const Nav = isNav ? 
        <button onClick={() => setIsNav(false)} className='h-12 w-12 absolute z-50 -sm:hidden right-8 top-8 pl-3 pt-3 border border-black rounded-full'>
            <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 191.721 191.72" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                <g><path d="M191.328 133.248c-6.39-12.188-19.232-21.508-29.474-30.397-10.948-9.502-22.332-18.497-33.687-27.513 12.985-16.615 26.197-33.1 39.136-49.818 2.477-.111 4.292-2.813 3.856-5.3 1.225-3.119-2.752-6.463-5.736-5.2-5.744-3.401-12.061-6.335-17.977-9.095-2.389-1.115-5.137 1.275-4.309 3.452-14.211 14.521-28.93 28.564-43.797 42.467-6.208-5.272-12.332-10.644-18.3-16.188-.028-.026-.054-.056-.082-.082-.013-1.002-.447-2.013-1.469-2.859-.295-.244-.615-.452-.916-.687l.01-.013c-.038-.02-.075-.044-.113-.065a105.273 105.273 0 0 0-3.453-2.59c-5.625-6.393-11.027-13.564-17.396-18.717-.107-3.117-3.365-6.168-6.835-4.063-11.694 7.096-25.984 14.422-35.003 24.937a4.884 4.884 0 0 0-.675 1.023c-2.405 0-4.331 3.555-2.289 5.636 16.229 16.54 34.895 30.518 53.126 44.752-20.276 18.875-40.302 37.979-59.288 58.052-.08.071-.165.098-.243.18a226.364 226.364 0 0 0-5.122 5.431c-2.882 3.107-.485 7.23 2.663 7.824 5.768 9.427 14.606 16.436 23.635 22.602 6.122 4.182 17.289 11.836 24.996 8.038 1.435.256 2.953-.159 3.71-1.67 12.661-25.268 27.836-48.728 44.177-71.383 9.179 8.064 18.289 16.209 27.48 24.216 2.699 2.351 32.588 33.965 37.721 23.447.705.192 1.441.281 2.169.147 4.673-.851 8.372-6.737 10.926-10.222 2.64-3.602 5.362-7.41 7.675-11.325 3.14 2.122 6.425-2.077 4.884-5.017zm-169.676 6.587c-.232.629-.283 1.287-.24 1.938-1.146.634-1.929 1.723-2.232 2.958-1.187.104-2.329.498-3.314 1.236-.14-.058-.277-.118-.417-.176a948.111 948.111 0 0 1 6.203-5.956zm29.398 37.208c-.836-.394-1.706-.678-2.581-.959a14.26 14.26 0 0 0 3.959-2.127c-.451 1.031-.936 2.051-1.378 3.086zM72.621 76.7c-10.23-8.269-20.595-16.375-30.994-24.432a130.741 130.741 0 0 0 10.146 6.318c6.855 6.141 13.933 12.056 21.077 17.901l-.229.213z" fill="currentColor" data-original="white"></path></g>
            </svg>
        </button>
        : 
        <button onClick={() => setIsNav(true)} className='absolute -sm:hidden right-8 top-10'>
            <svg className='h-7'  xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 18.2 10.4" style={{ enableBackground: "new 0 0 512 512"}} xmlSpace="preserve">
                <g transform="translate(-3 -6.8)"><path fill="#000000" fillRule="evenodd" d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" clipRule="evenodd" data-original="#000000"></path></g>
            </svg>
        </button>
        
    return (
        Nav
    )
    
}

export default NavControl