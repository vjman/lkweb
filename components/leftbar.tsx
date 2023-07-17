"use client";

import React from "react";
import { Dropdown } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Container, Card, Row, Col, Text } from "@nextui-org/react";

//项目版本选择
function ProjectNameSelector() {
  const [selected, setSelected] = React.useState(new Set(["项目名"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="NB6">宁波6号线</Dropdown.Item>
        <Dropdown.Item key="SX2">绍兴2号线</Dropdown.Item>
        <Dropdown.Item key="ZZ12">郑州12号线</Dropdown.Item>
        <Dropdown.Item key="NB5">宁波5号线</Dropdown.Item>
        <Dropdown.Item key="TJ5JHX">天津5-静海线</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

//版本号选择
function ProjectVersionSelector() {
  const [selected, setSelected] = React.useState(new Set(["版本号"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="1_3_11_0_060">V1.3.11.0_060</Dropdown.Item>
        <Dropdown.Item key="1_3_11_0_050">V1.3.11.0_050</Dropdown.Item>
        <Dropdown.Item key="1_3_11_0_051">V1.3.11.0_051</Dropdown.Item>
        <Dropdown.Item key="1_3_11_0_052">V1.3.11.0_052</Dropdown.Item>
        <Dropdown.Item key="1_3_11_0_053">V1.3.11.0_053</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

//报文类型选择
function MessageTypeSelector() {
  const [selected, setSelected] = React.useState(new Set(["报文类型"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="ATP1-ATP2">ATP首尾</Dropdown.Item>
        <Dropdown.Item key="ATP-ATS">ATP-ATS</Dropdown.Item>
        <Dropdown.Item key="ATP-ZC">ATP-ZC</Dropdown.Item>
        <Dropdown.Item key="ATP-CBI">ATP-CBI</Dropdown.Item>
        <Dropdown.Item key="ATP-TOD">ATP-TOD</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

//双按钮：解析报文、清除
function ParseClearBtn() {
  return (
      <Button.Group size="xl" vertical color="gradient" bordered>
        <Button>解一下</Button>
        <Button>清一下</Button>
      </Button.Group>
  );
}

//报文输入区
function MessageInput() {
  return (
    <Textarea
      color="success"
      //labelPlaceholder="请输入待解报文"
      placeholder="请输入待解报文"
      width="100%"
      rows={4}
    />
  );
}

//SQL语句提示
function SqlTip() {
  return (
    <Textarea
      color="default"
      //labelPlaceholder="请输入待解报文"
      placeholder="SQL语句提示"
      width="100%"
      rows={4}
    />
  );
}

//左侧边栏
export default function LeftBar() {
    return (
      <Container>
          <Card css={{ $$cardColor: '$colors$primary' }}>
          <Card.Body>
          <Row>
            <Col>
             <Row>
               <Card.Body>
                 <Row justify="flex-start" align="flex-start">
                   <ProjectNameSelector />
                 </Row>
               </Card.Body>
             </Row>
   
             <Row>
               <Card.Body>
                 <Row justify="flex-start" align="flex-start">
                   <ProjectVersionSelector />
                 </Row>
               </Card.Body>
             </Row>
   
             <Row>
               <Card.Body>
                 <Row justify="flex-start" align="flex-start">
                   <MessageTypeSelector />
                 </Row>
               </Card.Body>
             </Row>
            </Col>

           <Col>
              <Row>
                <Card.Body>
                  <Row justify="flex-end" align="flex-end">
                    <ParseClearBtn />
                  </Row>
                </Card.Body>
              </Row>
           </Col>
          </Row>
          </Card.Body>
        </Card>            

        <Card css={{ $$cardColor: '$colors$primary' }}>
          <Card.Body>
            <Row justify="center" align="center">
              {/* <Text h1 size={20} color="white" css={{ m: 0 }}>
                待解报文
              </Text> */}
              <MessageInput />
            </Row>
          </Card.Body>
        </Card>

        <Card css={{ $$cardColor: '$colors$primary', h: "537px"}}>
          <Card.Body>
            <Row justify="center" align="center">
              {/* <Text h1 size={20} color="white" css={{ m: 0 }}>
                SQL语句提示
              </Text> */}
              <SqlTip />
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
}