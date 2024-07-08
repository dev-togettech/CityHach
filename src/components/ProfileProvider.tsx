// src/App.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Menu, Card, Avatar, Typography, List, Button, Modal, Form, Input, Select, DatePicker, notification } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { ProviderProfile, Experience, Education, Skill, Interest } from './types';

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const App: React.FC = () => {
  const [providers, setProviders] = useState<ProviderProfile[]>([]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'experience' | 'education' | 'skill' | 'interest' | null>(null);
  const [currentItem, setCurrentItem] = useState<any>(null);
  const [currentProviderId, setCurrentProviderId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const providerResponse = await axios.get('http://localhost:8080/providers');
      setProviders(providerResponse.data);
    };

    fetchData();
  }, []);

  const handleAddItem = async (values: any) => {
    if (currentProviderId !== null && modalType !== null) {
      const updatedProvider = providers.find(p => p.id === currentProviderId);
      if (updatedProvider) {
        const newItem = {
          ...values,
          startDate: values.startDate ? values.startDate.format('YYYY-MM') : undefined,
          endDate: values.endDate ? values.endDate.format('YYYY-MM') : undefined,
        };

        switch (modalType) {
          case 'experience':
            updatedProvider.experiences.push(newItem);
            break;
          case 'education':
            updatedProvider.educations.push(newItem);
            break;
          case 'skill':
            updatedProvider.skills.push(newItem);
            break;
          case 'interest':
            updatedProvider.interests.push(newItem);
            break;
        }

        await axios.put(`http://localhost:8080/providers/${currentProviderId}`, updatedProvider);
        setProviders(providers.map(p => p.id === currentProviderId ? updatedProvider : p));
        notification.success({ message: `${modalType.charAt(0).toUpperCase() + modalType.slice(1)} added successfully` });
      }
    }
    setIsAddModalVisible(false);
  };

  const handleEditItem = async (values: any) => {
    if (currentProviderId !== null && currentItem !== null && modalType !== null) {
      const updatedProvider = providers.find(p => p.id === currentProviderId);
      if (updatedProvider) {
        const updatedItem = {
          ...values,
          startDate: values.startDate ? values.startDate.format('YYYY-MM') : undefined,
          endDate: values.endDate ? values.endDate.format('YYYY-MM') : undefined,
        };

        switch (modalType) {
          case 'experience':
            updatedProvider.experiences = updatedProvider.experiences.map(exp => exp.title === currentItem.title ? updatedItem : exp);
            break;
          case 'education':
            updatedProvider.educations = updatedProvider.educations.map(edu => edu.institution === currentItem.institution ? updatedItem : edu);
            break;
          case 'skill':
            updatedProvider.skills = updatedProvider.skills.map(skill => skill.name === currentItem.name ? updatedItem : skill);
            break;
          case 'interest':
            updatedProvider.interests = updatedProvider.interests.map(interest => interest.name === currentItem.name ? updatedItem : interest);
            break;
        }

        await axios.put(`http://localhost:8080/providers/${currentProviderId}`, updatedProvider);
        setProviders(providers.map(p => p.id === currentProviderId ? updatedProvider : p));
        notification.success({ message: `${modalType.charAt(0).toUpperCase() + modalType.slice(1)} updated successfully` });
      }
    }
    setIsEditModalVisible(false);
  };

  const showAddModal = (providerId: number, type: 'experience' | 'education' | 'skill' | 'interest') => {
    setCurrentProviderId(providerId);
    setModalType(type);
    setIsAddModalVisible(true);
  };

  const showEditModal = (providerId: number, item: any, type: 'experience' | 'education' | 'skill' | 'interest') => {
    setCurrentProviderId(providerId);
    setCurrentItem(item);
    setModalType(type);
    setIsEditModalVisible(true);
  };

  const handleCancel = () => {
    setIsAddModalVisible(false);
    setIsEditModalVisible(false);
    setCurrentItem(null);
    setCurrentProviderId(null);
    setModalType(null);
  };

  const renderModal = (type: 'experience' | 'education' | 'skill' | 'interest') => (
    <Modal
      title={`Add ${type.charAt(0).toUpperCase() + type.slice(1)}`}
      visible={isAddModalVisible || isEditModalVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <Form layout="vertical" onFinish={isAddModalVisible ? handleAddItem : handleEditItem} initialValues={currentItem}>
        <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title!' }]}>
          <Input />
        </Form.Item>
        {type === 'experience' && (
          <>
            <Form.Item name="type" label="Type">
              <Select>
                <Option value="full-time">Full-Time</Option>
                <Option value="part-time">Part-Time</Option>
                <Option value="contract">Contract</Option>
              </Select>
            </Form.Item>
            <Form.Item name="company" label="Company" rules={[{ required: true, message: 'Please input the company!' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="location" label="Location">
              <Input />
            </Form.Item>
            <Form.Item name="startDate" label="Start Date" rules={[{ required: true, message: 'Please select the start date!' }]}>
              <DatePicker picker="month" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="endDate" label="End Date">
              <DatePicker picker="month" style={{ width: '100%' }} />
            </Form.Item>
          </>
        )}
        {type === 'education' && (
          <>
            <Form.Item name="institution" label="Institution" rules={[{ required: true, message: 'Please input the institution!' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="degree" label="Degree" rules={[{ required: true, message: 'Please input the degree!' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="fieldOfStudy" label="Field of Study">
              <Input />
            </Form.Item>
            <Form.Item name="startDate" label="Start Date" rules={[{ required: true, message: 'Please select the start date!' }]}>
              <DatePicker picker="month" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name="endDate" label="End Date">
              <DatePicker picker="month" style={{ width: '100%' }} />
            </Form.Item>
          </>
        )}
        {type === 'skill' && (
          <Form.Item name="name" label="Skill" rules={[{ required: true, message: 'Please input the skill!' }]}>
            <Input />
          </Form.Item>
        )}
        {type === 'interest' && (
          <Form.Item name="name" label="Interest" rules={[{ required: true, message: 'Please input the interest!' }]}>
            <Input />
          </Form.Item>
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
          <Menu.Item key="2">Providers</Menu.Item>
          <Menu.Item key="3">Recruiters</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          {providers.map((provider) => (
            <div key={provider.id}>
              <Card style={{ maxWidth: 800, margin: 'auto', marginTop: 20 }} key={provider.id}>
                <Avatar src={provider.photo} size={100} />
                <Title level={2}>{`${provider.name} ${provider.firstname}`}</Title>
                <Text>{`Age: ${provider.age}`}</Text>
                <br />
                <Text>{`Date of Birth: ${provider.birthdate}`}</Text>
                <br />
                <Text>{`Place of Birth: ${provider.birthPlace}`}</Text>

                <div style={{ marginTop: 20 }}>
                  <Title style={{ display: 'flex', justifyContent: 'space-between' }} level={4}>
                    Experiences
                    <div>
                      <Button type="link" icon={<PlusOutlined />} onClick={() => showAddModal(provider.id, 'experience')} />
                    </div>
                  </Title>
                  <List
                    dataSource={provider.experiences}
                    renderItem={(item) => (
                      <List.Item actions={[<Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(provider.id, item, 'experience')} />]}>
                        <List.Item.Meta title={item.title} description={item.description} />
                      </List.Item>
                    )}
                  />
                </div>
              </Card>
              <Card style={{ maxWidth: 800, margin: 'auto', marginTop: 15 }}>
                <Title style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} level={4}>
                  Education
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button type="link" icon={<PlusOutlined />} onClick={() => showAddModal(provider.id, 'education')} />
                  </div>
                </Title>
                <List
                  dataSource={provider.educations}
                  renderItem={(item) => (
                    <List.Item actions={[<Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(provider.id, item, 'education')} />]}>
                      <List.Item.Meta title={item.institution} description={item.degree} />
                    </List.Item>
                  )}
                />
              </Card>

              <Card style={{ maxWidth: 800, margin: 'auto', marginTop: 15 }}>
                <Title style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} level={4}>
                  Skills
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button type="link" icon={<PlusOutlined />} onClick={() => showAddModal(provider.id, 'skill')} />
                  </div>
                </Title>
                <List
                  dataSource={provider.skills}
                  renderItem={(item) => (
                    <List.Item actions={[<Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(provider.id, item, 'skill')} />]}>
                      <List.Item.Meta title={item.name} />
                    </List.Item>
                  )}
                />
              </Card>

              <Card style={{ maxWidth: 800, margin: 'auto', marginTop: 15 }}>
                <Title style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} level={4}>
                  Interests
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button type="link" icon={<PlusOutlined />} onClick={() => showAddModal(provider.id, 'interest')} />
                  </div>
                </Title>
                <List
                  dataSource={provider.interests}
                  renderItem={(item) => (
                    <List.Item actions={[<Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(provider.id, item, 'interest')} />]}>
                      <List.Item.Meta title={item.name} />
                    </List.Item>
                  )}
                />
              </Card>
            </div>
          ))}
        </div>
      </Content>

      {modalType && renderModal(modalType)}
    </Layout>
  );
};

export default App;
