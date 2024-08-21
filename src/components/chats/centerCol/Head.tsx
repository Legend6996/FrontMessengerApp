import React from "react";
import Avatar from "../../ui/avatar/Avatar";

type Props = {
	name: string;
	img?: string;
	status: string;
};

const Head = ({ name, img, status }: Props) => {
	return (
		<>
			<div className="bg-body shadow-bottom z-10 dark:bg-bodyDark w-full">
				<div className="flex items-center gap-3 px-8 py-2">
					<Avatar
						name={name}
						img={img}
						size="sm"
					/>
					<div>
						<h2 className="text-xl font-bold">{name}</h2>
						<h3 className="text-sm">{status}</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default Head;
