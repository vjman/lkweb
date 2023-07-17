"use client";

import { Container, Row, Col } from "@nextui-org/react";
import TopBar from "../components/topbar";
import FootBar from "../components/footbar";
import LeftBar from "../components/leftbar";
import MidBar from "../components/midbar";
import RightBar from "../components/rightbar";

export default async function Home() {
  return (
    <Container gap={0}>

        <Row gap={0} justify="center" align="center">
            <TopBar />
        </Row>

        <Row gap={0} justify="center" align="center">
            <Col span={10}>
                <LeftBar />
            </Col>
            <Col span={22}>
                <MidBar />
            </Col>
            <Col span={10}>
                <RightBar />
            </Col>
        </Row>

        <Row justify="center" align="center">
            <FootBar />
        </Row>

    </Container>    
  );
}