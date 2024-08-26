import React, { useState } from "react";
import Tabs from "./Tabs";
import MediaList from "./media/MediaList";
import AudioList from "./audio/AudioList";

export type TabNames = "media" | "audio";

type Props = {};

const SharedContent = (props: Props) => {
	const [curTab, setCurTab] = useState<TabNames>("media");

	const renderContent = () => {
		switch (curTab) {
			case "media":
				return <MediaList />;
			case "audio":
				return <AudioList />;
			default:
				return null;
		}
	};

	return (
		<>
			<div className="">
				<Tabs
					curTab={curTab}
					setCurTab={setCurTab}
				/>
				{renderContent()}
			</div>
		</>
	);
};

export default SharedContent;
