"use client";

import { Container, Card, Row, Text } from "@nextui-org/react";

export default function FootBar() {
  return (
    <Container>
      <Card css={{ $$cardColor: '$colors$primary', h: "35px" }}>
        <Card.Footer>
          <Row justify="flex-start" align="center">
            <Text h1 size={15} color="white" css={{ m: 0 }}>
              底部状态提示栏
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
}
