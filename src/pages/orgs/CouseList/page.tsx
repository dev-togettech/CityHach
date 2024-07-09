// src/TrainingList.tsx
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Card, Typography, Button, Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Training, CompanyProfile } from './../../../types'

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const TrainingList: React.FC = () => {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [companies, setCompanies] = useState<CompanyProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trainingResponse = await axios.get('http://localhost:8080/trainings');
        const companyResponse = await axios.get('http://localhost:8080/companies');
        setTrainings(trainingResponse.data);
        setCompanies(companyResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const findCompanies = (companyIds: number[]): CompanyProfile[] => {
    return companyIds.map(id => companies.find(company => company.id === id)!).filter(Boolean);
  };

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><Link to="/">Accueil</Link></Menu.Item>
          <Menu.Item key="2">Formations</Menu.Item>
          <Menu.Item key="3"><Link to="/contact">Contact</Link></Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', backgroundColor: '#fff' }}>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <Title level={1}>Découvrez nos formations diplômantes</Title>
          <Text>Apprenez des compétences d'aujourd'hui et un métier qui a de l'avenir avec nos formations 100% en ligne.</Text>
          <div style={{ marginTop: '20px' }}>
            <Button type="primary" size="large">Démarrer mon inscription</Button>
          </div>
        </div>
        <div style={{ padding: '20px' }}>
          <Title level={3}>Dans quel domaine souhaitez-vous vous former ?</Title>
          {loading ? (
            <Spin size="large" />
          ) : (
            <Row gutter={[16, 16]}>
              {trainings.map(training => (
                <Col span={8} key={training.id}>
                  <Card title={training.title} cover={<img alt={training.title} src={training.imageUrl} />}>
                    <Text>{training.description}</Text>
                    <div style={{ marginTop: '10px' }}>
                      <Text strong>Compagnies:</Text>
                      <div>
                        {findCompanies(training.companies).map(company => (
                          <div key={company.id}>
                            <img src={company.logoUrl} alt={company.name} style={{ width: '50px', marginRight: '10px' }} />
                            <Text>{company.name}</Text>
                          </div>
                        ))}
                      </div>
                      <Link to={`/formations/${training.id}`}><Button type="primary" style={{ marginTop: '10px' }}>Voir plus</Button></Link>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
        <div style={{ backgroundColor: '#f0f2f5', padding: '20px', textAlign: 'center' }}>
          <Title level={3}>Valeurs ajoutées</Title>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Card title="Projets Concrets">
                <Text>Des projets concrets comme en entreprise.</Text>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Mentor Expert">
                <Text>Un mentor expert dédié.</Text>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Communauté Étudiante">
                <Text>Une communauté accessible d'étudiants.</Text>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Garantie Emploi">
                <Text>Garantie embauché ou remboursé.</Text>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Prédiction des tendances d'emploi">
                <Text>Analyse des tendances actuelles du marché pour adapter vos compétences.</Text>
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Anticipation des tendances futures">
                <Text>Utilisation de l'IA pour prévoir les futures demandes du marché et orienter votre formation.</Text>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default TrainingList;
