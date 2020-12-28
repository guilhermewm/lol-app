import React from "react";
import ReactParticles, { IParticlesParams } from 'react-particles-js';
import particlesConfig from './particles-config';

const Particles: React.FC = ({children}) => {
	return (
        <>
            <div style={{ position: 'relative' }}>
                <ReactParticles
                    params={particlesConfig as IParticlesParams}
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0
                    }}
                />
                {children && <div style={{ position: 'relative' }}>{children}</div>}
            </div>
        </>
	)
}

export default Particles;