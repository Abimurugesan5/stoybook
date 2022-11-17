import React, { useState } from "react";
import { Button, Steps,Row,Col } from "antd";

const StepPanel = (props) => {
  const [activeStep, setActiveStep] = useState(0);

  function next() {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
  }

  function prev() {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
  }

  return (
    <>
    <Row gutter={[16, 16]}>
        <Col span={8}>
      <Steps current={activeStep} style={{ width: 300,height:200 }} direction="vertical">
        {props.steps.map((item) => (
          <Steps.Step key={item.title} title={item.title} description={item.description}/>
        ))}
      </Steps>
      </Col>
      <Col span={16}>
      <div className="steps-content">{props.steps[activeStep].content}</div>
      <div className="steps-action">
        {/* {activeStep < props.steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )} */}
        {activeStep === props.steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
        {activeStep > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
      </Col>
      </Row>
    </>
  );
};

export { StepPanel };
