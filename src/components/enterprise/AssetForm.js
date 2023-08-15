import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import "../../App.css";

const AssetForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    image_url: '',
    whole_price: '',
    current_unit_price: '',
    end_price: '',
    company_own_count: '',
    foreign_own_count: '',
    personal_own_count: '',
    place_type: '',
    view_count: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // 이미지 파일 선택 시
    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // FormData 생성
    const formDataToSubmit = new FormData();
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    console.log(formDataToSubmit);
    // 여기에서 서버로 FormData 전송을 구현하면 됩니다.
  };

  return (
    <Container maxWidth="sm" className="asset-form-container">
      <Typography variant="h4" align="center" gutterBottom className='color-title'
      style={{
        fontSize: "1.4rem",
        fontWeight: "600",
      }} >
        자산 정보 등록
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="자산 이름"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="주소"
              fullWidth
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} style={{fontSize:"0.8rem", marginBottom:"-5px"}}>
          상품 이미지 업로드
          </Grid>
          <Grid item xs={12}>
            <input
              type="file" // 파일 업로드 입력 필드
              accept="image/*"
              name="image"
              onChange={handleChange}
              required
            ></input>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="전체 수량"
              fullWidth
              name="whole_price"
              value={formData.whole_price}
              onChange={handleChange}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="공모 희망 가격"
              fullWidth
              name="current_unit_price"
              value={formData.current_unit_price}
              onChange={handleChange}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} style={{fontSize:"0.8rem", marginBottom:"-5px"}}>
          상세 자료 (zip파일)
          </Grid>
          <Grid item xs={12}>
            <input
              type="file" // 파일 업로드 입력 필드
              accept="image/*"
              name="image"
              onChange={handleChange}
              required
            ></input>
          </Grid>
        </Grid>
        <hr style={{marginTop:"10px", marginBottom:"20px"}}/>
        <div className='right'>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="submit-button"
        >
          심사 요청
        </Button>
        </div>
      </form>
    </Container>
  );
}

export default AssetForm;