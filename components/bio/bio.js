import Tabs from "grommet/components/Tabs";
import Tab from "grommet/components/Tab";
import Box from "grommet/components/Box";
import Paragraph from "grommet/components/Paragraph";
import Heading from "grommet/components/Heading";
//import data from "../../staticContent/bio.json";
import React from "react";

const peopleData = [{
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
/*
const achievements = function(data, arr) {
	data.forEach((bio) => {
		const achievements = bio.Achievements.map((each) => { return (<Paragraph key = {each}>{each}</Paragraph>); });
		arr.push(achievements);
	});
};
*/
/*
const customTab = function(data) {
	const customTab = data.map((bio) => {
		return (<Tab title = {bio.Name} key = {bio.Name} >}</Tab>);
	});
	
	return customTab;
};

class CustomTabs extends React.Component {
	render() {
		return customTabs(peopleData);
	}
}
*/
export default () => (
	<Box pad = "medium">
		<Tabs responsive={false} justify = "start">
			<Tab title = "최영">
				<Heading tag = "h1">경력</Heading>
				<p>계원 예술대학교 우수 입학</p>
                <p>코엑스아트페어 단체전</p>
                <p>고양시 주최 젊은 작가 100인 단체전</p>
                <p>아트스페이스팝 개인전</p>
                <p>롯데 에비뉴엘 아트홀 {"<라이트>"} 단체전</p>
			</Tab>
			<Tab title = "Joel Mun"></Tab>
		</Tabs>
	</Box>
);

