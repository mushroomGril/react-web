import React from 'react'
import './App.css';
import { Form, DatePicker, ConfigProvider, Select, message } from 'antd';
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/zh_CN';
const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
class App extends React.Component {
  formRef = React.createRef();
  constructor(props) {
    super(props)
    this.state = {
      year: '',
      month: '',
      day: []
    }

  }
  onChange = (date, dateString) => {
    this.setState({
      year: dateString
    })
  }
  onMonthChange = value => {
    this.setState({
      month: value
    })
  }
  onDayChange = () => {
    let { year, month } = this.state
    let days = (new Date(year, month, 0)).getDate();
    let current_day = []
    if (year && month) {
      for (let i = 1; i <= days; i++) {
        current_day.push(i)
      }
      this.setState({
        day: current_day
      })
    } else {
      message.info('请先选择年份和月份');
    }

  };
  render() {
    return (
      <div className="App">
        <Form ref={this.formRef} name="control-ref" style={{ marginTop: '0px' }} layout="horizontal" labelCol={{ span: 3 }} wrapperCol={{ span: 21 }} labelAlign="left"   >
          <ConfigProvider locale={locale}>

            <Form.Item label="出生日期" >
              <Form.Item name="birthdate_y" style={{ display: 'inline-block', width: '120px', marginBottom: 0 }} >
                <DatePicker placeholder="年" format="YYYY" mode="year" picker="year" onChange={this.onChange} />
              </Form.Item>
              <span style={{ display: 'inline-block', width: '18px', lineHeight: '32px', textAlign: 'center' }}>
                -
				    </span>
              <Form.Item name="birthdate_m" style={{ display: 'inline-block', width: '120px', marginBottom: 0 }}>
                <Select placeholder="月" onChange={this.onMonthChange}>
                  {
                    months.map((item, index) => <Select.Option key={index} value={item}>{item}</Select.Option>)
                  }
                </Select>
              </Form.Item>
              <span style={{ display: 'inline-block', width: '18px', lineHeight: '32px', textAlign: 'center' }}>
                -
				    </span>
              <Form.Item name="birthdate_d" style={{ display: 'inline-block', width: '120px', marginBottom: 0 }}>

                <Select onClick={this.onDayChange} placeholder="日">
                  {
                    this.state.day.map((item, index) => <Select.Option key={index} value={item < 10 ? '0' + item : item}>{item < 10 ? '0' + item : item}</Select.Option>)
                  }
                </Select>
              </Form.Item>
            </Form.Item>
          </ConfigProvider>
        </Form>
      </div>
    );
  }
}

export default App;
