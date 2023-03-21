import React from 'react'
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { Profiles } from '../components'

export function SelectProfileContainer({ user, setProfile }){
    return <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Titles>Who's watching?</Profiles.Titles>
            <Profiles.List>
                <Profiles.User >
                    <Profiles.Picture src={user.photoURL} />
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
    
    </>
}