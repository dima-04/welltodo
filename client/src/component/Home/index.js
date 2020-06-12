import React from 'react';
import { Row, Col, Icon, Card, CardTitle, CollapsibleItem, Collapsible, Button } from 'react-materialize';
import "./style.css";

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
            header={<CardTitle image="https://ideas.staticsfly.com/ideas/wp-content/uploads/2018/10/you-got-this-list-1.jpg">Well To Do</CardTitle>}
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
        <Row>
          <Col m={6} s={6}>
            <Collapsible className="header-color"
              accordion
              popout
            >
              <CollapsibleItem
                expanded={false}
                header="What to do for morning."
                icon={<Icon>checkbox</Icon>}
                node="div"
              >
                Clean the Bathroom
  </CollapsibleItem>
              <CollapsibleItem
                expanded={false}
                header="What to do for noon."
                icon={<Icon>checkbox</Icon>}
                node="div"
              >
                Do your Homework.
  </CollapsibleItem>
              <CollapsibleItem
                expanded={false}
                header="What to do for evening"
                icon={<Icon>checkbox</Icon>}
                node="div"
              >
                Eat your dinner.
  </CollapsibleItem>
            </Collapsible>
          </Col>
        </Row>

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