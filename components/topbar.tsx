"use client";

import { Text } from "@nextui-org/react";
import { Container, Card, Row} from "@nextui-org/react";

function Title() {
  return (
      <Text
        h3
        size={33}
        css={{
          color: 'orange',
        }}
        weight="bold"
      >
        列控老伙计 V3.0
      </Text>
  );
}

export default function TopBar() {
  return (
      <Container>
        <Card css={{ $$cardColor: '$colors$primary', h: "60px" }}>
          <Card.Header>
            <Row justify="center">
              <Title />
            </Row>
          </Card.Header>
        </Card>
      </Container>
    );
  }
