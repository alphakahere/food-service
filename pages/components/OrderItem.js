import Image from "next/image";

import all from "../../public/assets/categories/all.jpg";

const OrderItem = ({ number, dish, price }) => {
	return (
		<div className="flex items-center justify-between mb-6 text-sm font-medium">
			<div className="flex items-center">
				<Image
					src={all}
					alt={dish}
					className=" rounded-3xl"
					width={90}
					height={60}
                    objectFit="cover"
				/>
				<h5 className="ml-4">
					{number}{" "}
					<span className="opacity-40 text-xs">x</span>{" "}
					{dish}
				</h5>
			</div>
			<h5 className=" opacity-50">CFA{price}</h5>
		</div>
	);
};

export default OrderItem;
