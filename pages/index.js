import Layout from "../components/layout"
import Card from "grommet/components/Card"
import Grommet from 'grommet'

export default () => (
    <Grommet.App centered = {false}>
    <Layout >
<Card thumbnail='https://images.pexels.com/photos/374685/pexels-photo-374685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  label='Sample Label'
  heading='Sample Heading'
  description='Sample description providing more details.' />
  <Card thumbnail='https://images.pexels.com/photos/374685/pexels-photo-374685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  label='Sample Label'
  heading='Sample Heading'
  description='Sample description providing more details.' />
  <Card thumbnail='https://images.pexels.com/photos/933701/pexels-photo-933701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  label='Sample Label'
  heading='Sample Heading'
  description='Sample description providing more details.' />
    </Layout>
    </Grommet.App>
)