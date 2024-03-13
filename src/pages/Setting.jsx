import { Button, Input, Typography } from 'antd';
import { useState } from 'react';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';
import * as Yup from 'yup';
import { DatePicker } from 'antd';
import 'dayjs/locale/vi';
import viVN from 'antd/lib/date-picker/locale/vi_VN';

const { RangePicker } = DatePicker;
const { Title } = Typography;

const Box = styled.div`
  display: block;
  margin-bottom: 15px;
`;

const validation = Yup.object().shape({
  title: Yup.string().required('Vui lòng nhập title'),
  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
});

const Setting = () => {
  const [formData, setFormData] = useState({
    title: '',
    email: '',
    range: null,
  });
  const [errors, setErrors] = useState({
    title: '',
    email: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [text, setText] = useState('');
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsButtonDisabled(false);
  };

  const handleSubmit = () => {
    validation
      .validate(formData, { abortEarly: false })
      .then(() => {
        setErrors({});
        console.log('Validation successful');
        console.log('Form data:', formData);
        console.log('Text:', text);
        console.log('Color:', color);
        if (formData.range) {
          const [startDate, endDate] = formData.range;
          console.log('Start Date:', startDate.format('YYYY-MM-DD'));
          console.log('End Date:', endDate.format('YYYY-MM-DD'));
        }
      })
      .catch((error) => {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      });
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    setIsButtonDisabled(false);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const handleRangePickerChange = (dates) => {
    setFormData({
      ...formData,
      range: dates,
    });
    setIsButtonDisabled(false);
  };

  return (
    <div>
      <Title level={2}>Setting</Title>
      <Box>
        <Input
          placeholder="Xin mời nhập title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          status={errors.title ? 'error' : ''}
        />
        {errors.title && <div style={{ color: 'red' }}>{errors.title}</div>}
      </Box>
      <Box>
        <Input
          placeholder="Xin mời nhập Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          status={errors.email ? 'error' : ''}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </Box>
      <Box>
        <RangePicker locale={viVN} onChange={handleRangePickerChange} />
      </Box>
      <Box>
        <Input placeholder="Nhập văn bản" value={text} onChange={handleTextChange} style={{ color: color }} />
      </Box>
      <Box>
        <ChromePicker color={color} onChange={handleColorChange} />
      </Box>
      <Button type="primary" disabled={isButtonDisabled} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Setting;
