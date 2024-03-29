import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Form,Input, DatePicker, TimePicker, Select, Cascader, InputNumber} from 'antd';
import Option from 'rc-mentions/lib/Option';
class Test extends Component {
  render() {
    
    const formItemLayout ={
      labelCol:{
        xs:{span:24},
        sm:{span:5},
      },
      wrapperCol:{
        xs:{span:24},
        sm:{span:12},
      },
    };
    return (
      <div>
        <Form {...formItemLayout}>
            <Form.Item label="Fail" validateStatus="error" help="Should be combination of numbers & alphabets ">
                <Input placeholder="unvailable choice" id="error"/>
            </Form.Item>

            <Form.Item label="warning" validateStatus="warning">
                <Input placeholder="Warning" id="warning" />
            </Form.Item>

            <Form.Item label="Validating" hasFeedback validateStatus="validating" help="The imformation is being validated...">
                <Input placeholder="I am the content is being validated" id="validating" />
            </Form.Item>

            <Form.Item label="Success" hasFeedback validateStatus="success">
                <Input placeholder="I am content" id="success" />
            </Form.Item>

            <Form.Item label="Warning" hasFeedback validateStatus="warning">
                <Input placeholder="Warning" id="warning2" />
            </Form.Item>

            <Form.Item label="Fail" hasFeedback validateStatus="error"help="Should be combination of numbers & alphabets ">
                <Input placeholder="unvailable choice"  id="error2"/>
            </Form.Item>

            <Form.Item label="success" hasFeedback validateStatus="success">
                <DatePicker style={{width:'100%'}} />
            </Form.Item>

            <Form.Item label="warning" hasFeedback validateStatus="warning">
                <TimePicker style={{width:'100%'}} />
            </Form.Item>

            <Form.Item label="Error" hasFeedback validateStatus="error">
                <Select defaultValue="1">
                   <Option value="1">Option 1</Option>
                   <Option value="2">Option 2</Option>
                   <Option value="3">Option 3</Option>
                </Select>
            </Form.Item>

            <Form.Item label="Validating" hasFeedback validateStatus="validating" help="he imformation is being validated...">
                <Cascader defaultValue={['1']} options={[]} />
            </Form.Item>

            <Form.Item label="inline" style={{marginBottom:0}}>
                <Form.Item validateStatus="error" help="Please select the correct date" style={{display:'inline-block',width:'calc(100%-12px)'}}>
                    <DatePicker/>
                </Form.Item>
                <span style={{display:'inline-block',width:'24px',textAlign:'center'}}>-</span>
                <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                    <DatePicker/>
                </Form.Item>
            </Form.Item>

            <Form.Item label="success" hasFeedback validateStatus="success">
                <InputNumber style={{width:'100%'}} />
            </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Test;