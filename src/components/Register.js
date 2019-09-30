import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col, Form, Input, Select, Button} from "antd";
import Option from "rc-mentions/lib/Option";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    };
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err,values)=>{
      if(!err){
        console.log(values);
      }
    })
  }

  handleConfirmBlur =(e)=>{
    const {value} =e.target;
     this.setState({confirmDirty:this.state.confirmDirty||!!value });

  }

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Mật khẩu nhập lại không khớp");
    } else {
      callback();
    }
  };
  checkNumber =(rule,value,callback)=>{
      const re =  /^[0-9]+$/;
    const{form} =this.props;
    if(re.test(value)){
        callback();
    }else{
        callback('Phone number not number');
    }
    
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const prefixSelect = getFieldDecorator('prefix',{
        initialValue:'84',
    })(
        <Select style={{width:'70'}}>
            <Option value="84">+84</Option>
            <Option value="85">+85</Option>
            <Option value="86">+86</Option>
        </Select>
    );
    return (
      <Row type="flex" justify="center">
        <Col span={18}>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col xs={7} sm={12} md={8}>
                <Form.Item>
                  <label style={{ textAlign: "left" }}>Họ Và Tên:</label>
                </Form.Item>
              </Col>

              <Col xs={17} sm={12} md={16}>
                <Form.Item hasFeedback>
                  {getFieldDecorator("name", {
                    rules: [
                      { required: true, message: "Please input your Name" },
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col xs={7} sm={12} md={8}>
                <Form.Item>
                  <label style={{ textAlign: "left" }}>Email:</label>
                </Form.Item>
              </Col>

              <Col xs={17} sm={12} md={16}>
                <Form.Item hasFeedback>
                  {getFieldDecorator("email", {
                    rules: [
                      { required: true, message: "Please input your Email" },
                      { type: "email", message: "The input not valid Email" }
                    ]
                  })(<Input />)}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col xs={7} sm={12} md={8}>
                <Form.Item>
                  <label style={{ textAlign: "left" }}>Password:</label>
                </Form.Item>
              </Col>

              <Col xs={17} sm={12} md={16}>
                <Form.Item hasFeedback>
                  {getFieldDecorator("password", {
                    rules: [
                      { required: true, message: "Please input your Password" },
                      { validator: this.validateToNextPassword }
                    ]
                  })(<Input.Password onBlur ={this.handleConfirmBlur} />)}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col xs={7} sm={12} md={8}>
                <Form.Item>
                  <label style={{ textAlign: "left" }}>Comfirm Password:</label>
                </Form.Item>
              </Col>

              <Col xs={17} sm={12} md={16}>
                <Form.Item hasFeedback>
                  {getFieldDecorator("confirm", {
                    rules: [
                      { required: true, message: "Please input your Password" },
                      { validator: this.compareToFirstPassword }
                    ]
                  })(<Input.Password />)}
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col xs={7} sm={12} md={8}>
                <Form.Item>
                  <label style={{textAlign:'left'}}>Phone Number:</label>
                </Form.Item>
              </Col>

              <Col xs={17} sm={12} md={16}>
                <Form.Item hasFeedback>
                  {getFieldDecorator("phone", {
                    rules: [
                      { required: true, message: "Please input your Phone Number" },
                        {validator: this.checkNumber}
                    ]       
                  })(<Input addonBefore={prefixSelect} style={{width:'100%'}} />)}
                </Form.Item>
              </Col>
            </Row>

            <Row>
                <Col style={{textAlign:'center'}}>
                  <Button type="primary" htmlType="submit">Register</Button>
                </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Form.create({ name: "register" })(Register);
