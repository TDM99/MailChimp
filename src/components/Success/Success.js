import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { Icon, H3, P } from './styles';

export const Success = () => {
    return (
        <>
            <Icon>
                <FontAwesomeIcon icon={faCheck} />
            </Icon>
            <H3>Success<span>!</span></H3>
            <P>Thanks for subscribing</P>
        </>
    )
}