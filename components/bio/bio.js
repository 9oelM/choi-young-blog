import Tabs from "grommet/components/Tabs";
import Tab from "grommet/components/Tab";
import Box from "grommet/components/Box";
import Paragraph from "grommet/components/Paragraph";
//import data from "../../staticContent/bio.json";
import React from "react";

const data = [{
		"Name": "최영",
		"Achievements": [
			"계원 예술대학교 우수 입학",
			"코엑스아트페어 단체전",
			"고양시 주최 젊은 작가 100인 단체전",
			"아트스페이스팝 개인전",
			"롯데 에비뉴엘 아트홀 <라이트> 단체전"
		]
	},
	{
		"Name": "Joel Mun",
		"Achievements": [
			"계원 예술대학교 우수 입학",
			"코엑스아트페어 단체전",
			"고양시 주최 젊은 작가 100인 단체전",
			"아트스페이스팝 개인전",
			"롯데 에비뉴엘 아트홀 <라이트> 단체전"
		]
	}
];



const showAchievements = data.Biographies.forEach((bio) => {
	const achievements = bio.Achievements.map((each) => {
		return <Paragraph key = {each}>{each}</Paragraph>;
	});
	return achievements;
});
const showTabs = paragraphs => data.map((bio) => {
	return (<Tab title = {bio.Name} key = {bio.Name}>{paragraphs}</Tab>);
});

class TabWithData extends React.Component {
	render() {
		return showTabs(showAchievements);
	}
}

export default () => (
	<Box pad = "medium">
	<Tabs responsive={false} justify = "start">
		<TabWithData/>
	</Tabs>
	</Box>
);
