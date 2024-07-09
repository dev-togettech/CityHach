// src/CompanyProfile.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Menu, Card, Typography, List, Button, Modal, Form, Input, DatePicker, notification } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { CompanyProfile, Objective, Testimonial } from '../types';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const CompanyProfileComponent: React.FC = () => {
  const [company, setCompany] = useState<CompanyProfile | null>(null);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'objective' | 'location' | 'size' | 'testimonial' | null>(null);
  const [currentItem, setCurrentItem] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const companyResponse = await axios.get('http://localhost:8080/companies');
      setCompany(companyResponse.data[0]);
    };

    fetchData();
  }, []);

  const handleAddItem = async (values: any) => {
    if (company !== null && modalType !== null) {
      const updatedCompany = { ...company };
      const newItem = {
        ...values,
        date: values.date ? values.date.format('YYYY-MM-DD') : undefined,
      };

      switch (modalType) {
        case 'objective':
          updatedCompany.objectives.push(newItem);
          break;
        case 'location':
          updatedCompany.locations.push(newItem);
          break;
        case 'size':
          updatedCompany.size = { ...values, creationDate: values.creationDate.format('YYYY-MM-DD') };
          break;
        case 'testimonial':
          updatedCompany.testimonials.push(newItem);
          break;
      }

      await axios.put(`http://localhost:8080/companies/${company.id}`, updatedCompany);
      setCompany(updatedCompany);
      notification.success({ message: `${modalType.charAt(0).toUpperCase() + modalType.slice(1)} added successfully` });
    }
    setIsAddModalVisible(false);
  };

  const handleEditItem = async (values: any) => {
    if (company !== null && currentItem !== null && modalType !== null) {
      const updatedCompany = { ...company };
      const updatedItem = {
        ...values,
        date: values.date ? values.date.format('YYYY-MM-DD') : undefined,
      };

      switch (modalType) {
        case 'objective':
          updatedCompany.objectives = updatedCompany.objectives.map(obj => obj.name === currentItem.name ? updatedItem : obj);
          break;
        case 'location':
          updatedCompany.locations = updatedCompany.locations.map(loc => loc.city === currentItem.city ? updatedItem : loc);
          break;
        case 'size':
          updatedCompany.size = { ...values, creationDate: values.creationDate.format('YYYY-MM-DD') };
          break;
        case 'testimonial':
          updatedCompany.testimonials = updatedCompany.testimonials.map(test => test.author === currentItem.author ? updatedItem : test);
          break;
      }

      await axios.put(`http://localhost:8080/companies/${company.id}`, updatedCompany);
      setCompany(updatedCompany);
      notification.success({ message: `${modalType.charAt(0).toUpperCase() + modalType.slice(1)} updated successfully` });
    }
    setIsEditModalVisible(false);
  };

  const showAddModal = (type: 'objective' | 'location' | 'size' | 'testimonial') => {
    setModalType(type);
    setIsAddModalVisible(true);
  };

  const showEditModal = (item: any, type: 'objective' | 'location' | 'size' | 'testimonial') => {
    setCurrentItem(item);
    setModalType(type);
    setIsEditModalVisible(true);
  };

  const handleCancel = () => {
    setIsAddModalVisible(false);
    setIsEditModalVisible(false);
    setCurrentItem(null);
    setModalType(null);
  };

  const renderModal = (type: 'objective' | 'location' | 'size' | 'testimonial') => (
    <Modal
      title={`Add ${type.charAt(0).toUpperCase() + type.slice(1)}`}
      visible={isAddModalVisible || isEditModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form layout="vertical" onFinish={isAddModalVisible ? handleAddItem : handleEditItem} initialValues={currentItem}>
        {type === 'objective' && (
          <>
            <Form.Item name="name" label="Objective Name" rules={[{ required: true, message: 'Please input the objective name!' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please input the description!' }]}>
              <Input />
            </Form.Item>
          </>
        )}
        {type === 'location' && (
          <>
            <Form.Item name="city" label="City" rules={[{ required: true, message: 'Please input the city!' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="district" label="District">
              <Input />
            </Form.Item>
            <Form.Item name="street" label="Street">
              <Input />
            </Form.Item>
            <Form.Item name="telephone" label="Telephone">
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
          </>
        )}
        {type === 'size' && (
          <>
            <Form.Item name="employeeCount" label="Number of Employees" rules={[{ required: true, message: 'Please input the number of employees!' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="creationDate" label="Date of Creation" rules={[{ required: true, message: 'Please select the date of creation!' }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="majorEvent" label="Major Event">
              <Input />
            </Form.Item>
          </>
        )}
        {type === 'testimonial' && (
          <>
            <Form.Item name="author" label="Author" rules={[{ required: true, message: 'Please input the author!' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="quote" label="Quote" rules={[{ required: true, message: 'Please input the quote!' }]}>
              <Input />
            </Form.Item>
          </>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {isAddModalVisible ? 'Add' : 'Save'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Company</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          {company && (
            <div>
              <Card style={{ maxWidth: 800, margin: 'auto', marginTop: 20 }}>
                <Title level={2}>{company.name}</Title>
                <Text>{`Official Name: ${company.officialName}`}</Text>
                <br />
                <Text>{`Creation Text: ${company.creationText}`}</Text>
                <br />
                <Text>{`Website: ${company.website}`}</Text>
                <div style={{ marginTop: 20 }}>
                  <Title style={{ display: 'flex', justifyContent: 'space-between' }} level={4}>
                    Objectives
                    <Button type="link" icon={<PlusOutlined />} onClick={() => showAddModal('objective')} />
                  </Title>
                  <List
                    dataSource={company.objectives}
                    renderItem={(item) => (
                      <List.Item actions={[<Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(item, 'objective')} />]}>
                        <List.Item.Meta title={item.name} description={item.description} />
                      </List.Item>
                    )}
                  />
                </div>
              </Card>

              <Card style={{ maxWidth: 800, margin: 'auto', marginTop: 15 }}>
                <Title style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} level={4}>
                  Locations
                  <Button type="link" icon={<PlusOutlined />} onClick={() => showAddModal('location')} />
                </Title>
                <List
                  dataSource={company.locations}
                  renderItem={(item) => (
                    <List.Item actions={[<Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(item, 'location')} />]}>
                      <List.Item.Meta title={item.city} description={`${item.district}, ${item.street}`} />
                    </List.Item>
                  )}
                />
              </Card>

              <Card style={{ maxWidth: 800, margin: 'auto', marginTop: 15 }}>
                <Title style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} level={4}>
                  Company Size
                  <Button type="link" icon={<PlusOutlined />} onClick={() => showAddModal('size')} />
                </Title>
                <List
                  dataSource={[company.size]}
                  renderItem={(item) => (
                    <List.Item actions={[<Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(item, 'size')} />]}>
                      <List.Item.Meta title={`Number of Employees: ${item.employeeCount}`} description={`Date of Creation: ${item.creationDate}, Major Event: ${item.majorEvent}`} />
                    </List.Item>
                  )}
                />
              </Card>

              <Card style={{ maxWidth: 800, margin: 'auto', marginTop: 15 }}>
                <Title style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} level={4}>
                  Testimonials
                  <Button type="link" icon={<PlusOutlined />} onClick={() => showAddModal('testimonial')} />
                </Title>
                <List
                  dataSource={company.testimonials}
                  renderItem={(item) => (
                    <List.Item actions={[<Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(item, 'testimonial')} />]}>
                      <List.Item.Meta title={item.author} description={item.quote} />
                    </List.Item>
                  )}
                />
              </Card>
            </div>
          )}
        </div>
      </Content>

      {modalType && renderModal(modalType)}
    </Layout>
  );
};

export default CompanyProfileComponent;
