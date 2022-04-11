import React from 'react';
import { StyledDiv } from './styled_components';
import styles from './Legend.module.scss';

const Legend = ({color, label, ...props}) => {

    return(
        <div className={styles.legend}>
            <StyledDiv color={color}></StyledDiv>
            <div className={styles.label}>{label}</div>
        </div>
    )
}

export default React.memo(Legend);