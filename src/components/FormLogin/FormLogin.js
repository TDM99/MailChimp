import React from 'react';

import { Container, H1, P, Input, Button, FsName } from './styled';

export const FormLogin = () => {
    
    return (
        <>
            <Container>
                <H1>Join Our Newsletter</H1>
                <P>Sign up receive the latest updates, directly from our company</P>
                <form>
                    <FsName>
                        <Input type="text" placeholder="First Name" />
                        <Input type="text" placeholder="Last Name" />
                    </FsName>
                    <Input type="email" placeholder="Email Address" />
                    <Button type="submit" className="button">Sign Up</Button>
                </form>
            </Container>
        </>
    )
}
