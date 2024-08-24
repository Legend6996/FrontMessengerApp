import React from "react";
import Avatar from "../../ui/avatar/Avatar";
import Button from "@/components/ui/buttons/button/Button";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { boolean } from "zod";

type Props = {
	name: string;
	img?: string;
	status: string;
  setIsOpenChatsCol: (a: boolean) => void;
  isOpenChatsCol: boolean;
}; 

const Head = ({ name, img, status, isOpenChatsCol, setIsOpenChatsCol }: Props) => {
	return (
		<>
			<div className="bg-body cursor-pointer shadow-bottom z-10 dark:bg-bodyDark w-full">
				<div className="flex items-center gap-3 px-3 md:px-8 py-2">
          <Button onClick={() => setIsOpenChatsCol(!isOpenChatsCol)} className="" icon={ArrowLeftIcon}/>
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

export default Head;
