import React from 'react';
import { Row, Col, Icon, Card, CardTitle, CollapsibleItem, Collapsible, Button } from 'react-materialize';
import "./style.css";
import Todolist from '../Todolist';

function Home(props) {
  if (!props.user.id) {
    return (
      <Row>
        <Col
          m={6}
          s={6}
        >
          <Card
            actions={[
              <a key="1" href="#">Sing up</a>
            ]}
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://www.wekowork.com/wp-content/uploads/2019/02/todolist-vert.png"></CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
          >
            Organize your tasks never miss deadline!!.
    </Card>
        </Col>
      </Row>
    );
  } else {
    return (
      <div>
        <Todolist user={props.user} />
        <Button
          className="AddButton"
          floating
          large
          node="a"
          href="/newTodo"
        >
          New Todo
          </Button>
      </div>
    );
  }
}

export default Home;