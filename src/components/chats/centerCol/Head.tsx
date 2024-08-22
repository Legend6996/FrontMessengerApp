import React from "react";
import Avatar from "../../ui/avatar/Avatar";
import Button from "@/components/ui/buttons/button/Button";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

type Props = {
	name: string;
	img?: string;
	status: string;
};

const Head = ({ name, img, status }: Props) => {
	return (
		<>
			<div className="bg-body cursor-pointer shadow-bottom z-10 dark:bg-bodyDark w-full">
				<div className="flex items-center gap-3 px-3 md:px-8 py-2">
          <Button className="md:!hidden" icon={ArrowLeftIcon}/>
					<Avatar
						name={name}
						img={img}
						size="xs"
					/>
					<div>
						<h2 className="md:text-xl font-bold">{name}</h2>
						<h4 className="text-sm">{status}</h4>
					</div>
				</div>
			</div>
		</>
	);
};

export default Head;
