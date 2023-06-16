import { Link } from 'react-router-dom';

const Community = () => {
    return (
        <div className="h-full flex">
            <Link to='/'>
                <div className="bg-gray-200 w-[60px] flex-shrink-0"></div>
            </Link>
            <Link to='/food'>
                <div className="bg-blue-400 h-full w-[60px] flex-shrink-0"></div>
            </Link>
            <Link to='/retail'>
                <div className="bg-red-500 h-full w-[60px] flex-shrink-0"></div>
            </Link>

            <div className="bg-yellow-500 h-full w-full"></div>
        </div>
    )
}

export default Community