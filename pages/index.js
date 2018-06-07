import Layout from "../components/layout"
import Card from "grommet/components/Card"
import Grommet from 'grommet'

export default () => (
    <Grommet.App centered = {false}>
    <Layout >
        

<Card thumbnail='/img/carousel-1.png'
  label='Sample Label'
  heading='Sample Heading'
  description='Sample description providing more details.' />
    </Layout>
    </Grommet.App>
)