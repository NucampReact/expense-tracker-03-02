import { Card, CardHeader, CardBody } from 'reactstrap';
import Heading from './heading';

/**
 * Props vs. State - Data management
 * 
 * Props:
 *  - Read-only data
 *  - Data passed from one component to another
 * 
 * State:
 *  - Writeable data
 *  - Data local/private to a single component
 */

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