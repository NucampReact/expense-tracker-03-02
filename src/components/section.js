import { Card, CardHeader, CardBody } from 'reactstrap';
import Heading from './heading';

function Section(props) {
  return (
    <Card>
      <CardHeader>
        <Heading title={props.title} />
      </CardHeader>
      <CardBody>
        {props.content}
      </CardBody>
    </Card>
  )
}

export default Section;