"use client";

import { Container, Card, Row, Text } from "@nextui-org/react";
import Funny from './funny';

export default function RightBar() {
    return (
      <Container>
        <Card css={{ $$cardColor: '$colors$primary' }}>
          <Card.Body>
            <Row justify="center" align="center">
              <Text h1 size={20} color="white" css={{ m: 0 }}>
                历史记录按钮（导入、导出、清除）
              </Text>
            </Row>

            <Row justify="center" align="center">
              <Funny />
            </Row>
          </Card.Body>
        </Card>

        <Card css={{ $$cardColor: '$colors$primary', h: "850px" }}>
          <Card.Body>
            <Row justify="center" align="center">
              <Text h1 size={20} color="white" css={{ m: 0 }}>
                历史记录显示区（项目名称、版本号、报文类型、周期号及记录本体的封装
                、可备注标签头）
              </Text>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }