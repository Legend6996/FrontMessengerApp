import React from "react";
import Avatar from "../../ui/avatar/Avatar";
import Button from "@/components/ui/buttons/button/Button";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useAppSelector, useActions } from "@/hooks/redux";

type Props = {
	name: string;
	img?: string;
	status: string;
}; 

const Header = ({ name, img, status }: Props) => {
  const { toggleLeftColumn } = useActions();
  
	return (
		<>
			<div className="bg-body cursor-pointer shadow-bottom z-10 dark:bg-bodyDark w-full">
				<div className="flex items-center gap-3 px-3 md:px-8 py-2">
          <Button onClick={() => toggleLeftColumn()} className="lg:!hidden" icon={ArrowLeftIcon}/>
					<Avatar
						name={name}
						img={img}
						size="sm"
					/>
					<div className="flex flex-col justify-center">
						<div className="md:text-lg !leading-tight font-bold">{name}</div>
						<span className="text-sm">{status}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
