import Avatar from "@/components/ui/avatar/Avatar";
import React from "react";

type Props = {
	isCurUser: boolean;
	content: string;
};

const Message = ({ isCurUser, content }: Props) => {
	return (
		<div className={`w-full max-w-[70%] ${isCurUser ? "self-end" : ""}`}>
			<div className="flex gap-2">
				<div className={`${isCurUser ? "order-2" : "order-1"}`}>
					<div
						className={`sticky top-0 hidden self-end md:block`}
					>
						<Avatar
							size="xs"
							name="Bob"
						/>
					</div>
				</div>
				<div
					className={`rounded-main bg-body px-4 py-2 ${isCurUser ? "order-1 bg-primaryLight3" : "order-2"}`}
				>
					{content}
				</div>
			</div>
		</div>
	);
};

export default Message;
