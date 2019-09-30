import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Row, Col, Input, Switch, Icon, Select, Button } from 'antd';

class TuVi extends Component {
    constructor(props) {
        super(props);
        this.state={
            year:false,
            month:0,
            day:false,
        }
    }
    checkYear = (value) =>{
        if (value%4==0&&value%100!=0||value%400==0) {
            this.setState({
                year:true
            })
            setTimeout(() => {
                console.log(this.state.year);
            }, 500);
        }else{
            this.setState({
                year:false
            })
            setTimeout(() => {
                console.log(this.state.year);
            }, 500);
        }
    }
    checkMonth = (value) =>{
        if (value==1||value==3||value==5||value==7||value==8||value==10||value==12) {
            this.setState({
                month:1
            })
            setTimeout(() => {
                console.log(this.state.month);
            }, 500);
        }
        else if (value==2){
            this.setState({
                month:2
            })
            setTimeout(() => {
                console.log(this.state.month);
            }, 500);
        }
        else{
            this.setState({
                month:0
            })
            console.log(this.state.month);
            setTimeout(() => {
                console.log(this.state.month);
            }, 500);
        }
    }
    render() {
        const { Option } = Select;
        const {getFieldDecorator} = this.props.form;
        // const FormItemLayout={
        //     labelCol:{
        //         xs:{span:6},
        //         sm:{span:12}

        //     },
        //     wrapperCol:{
        //         xs:{span:18},
        //         sm:{span:12},
        //     }
        // };
        const list = (day)=>{
            return Array.apply(null, new Array(day)).map((value, index) => {
                return <Option key={1+index} value={1+index}>{1+index}</Option>
            });
            }
        console.log(list(12));
        const listYear = Array.apply(null, new Array(300)).map((value, index) => {
            return <Option key={1800 + index} value={1800 + index}>{1800 + index}</Option>
        });
							
        // const listMoth = Array.apply(null, new Array(12)).map((value, index) => {
        //     return <Option key={1+index} value={1+index}>{1+index}</Option>
        // });

        // const list31Day = Array.apply(null, new Array(31)).map((value, index) => {
        //     return <Option key={1 + index} value={1 + index}>{1 + index}</Option>
        // });
        // const list30Day = Array.apply(null, new Array(30)).map((value, index) => {
        //     return <Option key={1 + index} value={1 + index}>{1 + index}</Option>
        // });
        // const list28Day = Array.apply(null, new Array(28)).map((value, index) => {
        //     return <Option key={1 + index} value={1 + index}>{1 + index}</Option>
        // });
        // const list29Day = Array.apply(null, new Array(29)).map((value, index) => {
        //     return <Option key={1 + index} value={1 + index}>{1 + index}</Option>
        // });
        const renderDay = () =>{
            if (this.state.month ==1) {
                return list(31);
            }
            if(this.state.month ==0){
                return list(30);
            }
            if(this.state.year == true && this.state.month ==2){
                return list(29);
            }
            if(this.state.year != true && this.state.month ==2){
                return list(28);
            }
        }
        return (
            <Row type="flex" justify="center">
                <Col span={20}>
                    <Form>
                        <Row>
                            <Col xs={6}>
                                <Form.Item>
                                <label>Họ Tên</label>
                                </Form.Item>
                            </Col>
                            <Col xs={18}>
                                <Form.Item hasFeedback>{getFieldDecorator('name',{
                                    rules:[{required:true,message:'Họ Tên Không Được Để Trống'}]
                                })(<Input/>)}</Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                            <Form.Item>
                                <label>Giới Tính</label>
                                </Form.Item>
                            </Col>
                            <Col xs={6}>
                                <Form.Item>
                                <Switch checkedChildren="Nam" unCheckedChildren="Nữ" defaultChecked/>
                                </Form.Item>
                            </Col>
                            <Col xs={6}>
                            <Form.Item>
                                <label>Âm-Dương</label>
                                </Form.Item>
                            </Col>
                            <Col xs={8}>
                                <Form.Item>
                                <Switch checkedChildren="Dương Lịch" unCheckedChildren="Âm Lịch" defaultChecked/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                <Form.Item>
                                <Select placeholder="Chọn Năm" showSearch onChange={this.checkYear}>
                                    {listYear}
                                </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                <Form.Item>
                                <Select placeholder="Chọn Tháng" showSearch onChange={this.checkMonth}>
                                    {list(12)}
                                </Select>
                                </Form.Item>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                <Form.Item>
                                <Select placeholder="Chọn Ngày" showSearch>
                                    {renderDay()}
                                </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                            <Button style={{width:'100%'}} type="primary" htmlType="submit">Lập Lá Số</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default Form.create({name:"Information"})(TuVi);