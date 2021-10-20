import Image from 'next/image'

import all from "../../public/assets/categories/all.jpg";


const DisheItem = ({name, avg, base, category}) => {
    return (
        <div className="flex flex-col justify-center mb-3">
            <Image src={all} alt={name} className=" rounded-3xl" width={290} height={170}/>
            <h3 className="mt-3 text-sm leading-6 font-medium">{name}</h3>
            <h5 className="text-gray-400 text-sm">&#9733; 
                <span className="text-black font-medium">{avg} </span>
                <span>&#183; {base} &#183; {category}</span>
            </h5>
        </div>
    )
}

export default DisheItem
