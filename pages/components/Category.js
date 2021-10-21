import Image from "next/image";
import all from "../../public/assets/categories/all.jpg";

const Category = ({name, urlimage}) => {
	return (
		<div className="flex flex-col mr-3 mb-5 justify-center items-center bg-gray-50 border border-gray-300 px-5 pt-5 pb-2 rounded-xl w-20 h-24 hover:border-green-600 transition-all ease-in">
			<Image
				src={urlimage}
				alt={name}
				width={30}
				height={30}
				className="rounded"
				objectFit="cover"
			/>
			<h5 className="mt-2 text-sm font-medium text-center">
				{name}
			</h5>
		</div>
	);
};

export default Category;
