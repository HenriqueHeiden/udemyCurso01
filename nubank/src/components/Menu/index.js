import React from 'react';

import QRCode from 'react-native-qrcode';
import { Container, Code, Nav, NavItem, NavText, SingOutButton, SingOutButtonText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Menu({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1]
            })
        }}>
            <Code>
                <QRCode
                    value="https://google.com.br"
                    size={80}

                    fgColor="#8B10AE"
                    bgColor="#FFF"
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name='help-outline' size={20} color='#fff' />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='person-outline' size={20} color='#fff' />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='credit-card' size={20} color='#fff' />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name='smartphone' size={20} color='#fff' />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>
            <SingOutButton onPress={() => { }} >
                <SingOutButtonText>SAIR DO APP</SingOutButtonText>
            </SingOutButton>
        </Container>
    );
}