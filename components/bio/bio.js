import Tabs from "grommet/components/Tabs";
import Tab from "grommet/components/Tab";
import Paragraph from "grommet/components/Paragraph";
export default () => (
<Tabs responsive={false} justify = "start">
  <Tab title='First Title'>
    <Paragraph>
      First contents
    </Paragraph>
    
  </Tab>
  <Tab title='Second Title'>
    <Paragraph>
      Second contents
    </Paragraph>
  </Tab>
</Tabs>

);

