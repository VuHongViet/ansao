import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import './css/Test.css';
class Form_login  extends Component {
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log('Recevice value ', values);
            }
        });
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form  onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username',{
                            rules:[{required:true,message:'Please input your username'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color:'red'}} />}
                            placeholder="Username"
                        />,
                        )}
                    </Form.Item>
                    
                    <Form.Item>
                        {getFieldDecorator('password',{
                            rules:[{required:true,message:'Please input your password'}],
                        })(
                            <Input.Password prefix={<Icon type="lock" style={{color:'red'}} />}
                            placeholder="Password"
                        />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember',{
                            valuePropName: 'checked',
                            initialValue:true,
                        })(
                            <Checkbox>Remember</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Quên mật khẩu</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">Login</Button>
                        Or <a href="">Đăng kí ngay</a>
                    </Form.Item>
                </Form>
            </div>
        );
    };
}
export default Form.create({ name: 'normal_login' })(Form_login); 