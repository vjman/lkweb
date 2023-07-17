"use client";

import { Container, Card, Row, Col, Text } from "@nextui-org/react";
import { Input, Spacer } from "@nextui-org/react";
import { Textarea  } from '@nextui-org/react';

//SID显示
function InputSid({sid}: {sid?: string}) {
  return (
    <>
      <Input readOnly placeholder="SID"  value={sid}/>
    </>
  );
}

//DID显示
function InputDid({did}: {did?: string}) {
  return (
    <>
      <Input readOnly placeholder="DID" value={did}/>
    </>
  );
}

//CYCLE显示
function InputCycle({cycle}: {cycle?: string}) {
  return (
    <>
      <Input readOnly placeholder="CYCLE" value={cycle}/>
    </>
  );
}

//报文解析结果显示
function ParseResult({result}: {result?: string}) {
  return (
    <Textarea
      readOnly
      placeholder="报文解析结果"
      width="100%"
      value={result}
      rows={40}
    />
  );
}

export default function MidBar() {
    return (
      <Container responsive={true} xl>
        <Card css={{ $$cardColor: '$colors$primary', h: "960px"}}>
          <Card.Body>
            <Row>
              <Col span={12} offset={0}>
                <InputSid sid={"SID"}/>
              </Col>
              <Spacer y={1} />
              <Col span={12}>
                <InputDid did={"DID"}/>
              </Col>
              <Spacer y={1} />
              <Col span={6}>
                <InputCycle cycle={"CYCLE"}/>
              </Col>
            </Row>
            <Spacer y={1} />
            <Row justify="center" align="center">
              <ParseResult result={"解析结果是..."} />
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }