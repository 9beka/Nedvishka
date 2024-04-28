import React, {useLayoutEffect} from 'react';
import { Alert } from 'antd';
import gsap from 'gsap'
const MyAlert = ({message,type}) => {
    const divAlertStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
         top: '0',
        left: '50%',
        transform: 'translate(-50%, 50%)',
        zIndex: '1000'
    }

    useLayoutEffect(() => {
        gsap.fromTo('.antd-alert-message', { opacity: 0, y: -100 }, { opacity: 1, y: 0 });

        setTimeout(() => {
            gsap.to('.antd-alert-message', { opacity: 0, y: -100, duration: 1 });
        }, 3000);

    }, []);



    return (
        <>
            <div style={divAlertStyle}>
                <Alert className='antd-alert-message' showIcon message={message} type={type} style={{
                    zIndex:10000,
                }}/>
            </div>

        </>
        )
}

export default MyAlert;