import React, {useState} from 'react';
import styles from './Table.module.scss'
import { useEffect } from 'react';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const Table = ({dinners, nbrTable, occuped, leaveTable, ...props}) => {
  const [info, setInfo] = useState(`Table: ${nbrTable}, Seats: ${dinners}`);
  const [status,setStatus] = useState("lightgreen");

  useEffect(() => {
    if (occuped) {
      setStatus("#DC143C");
      setTimeout(() => {
        setStatus("orange");
      },6000)
      setTimeout(() => {
        setStatus("lightgreen");
        leaveTable(occuped);
      },9000)
    }
  },[occuped]);


    const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: theme.palette.common.black,
          color: '#ffffff',
          fontSize: '25px'
        },
      }));

    const onHandleClick = () => {
        setInfo(`Mobile: ${occuped.Mobile}, Diners: ${occuped.Diners}, StartTime: ${occuped.startTime}`);
    }

    
    return( 
        <CustomTooltip title={info} arrow classes={styles.tooltip}>
            <img onClick={occuped && onHandleClick} src={`./images/${dinners > 5 ? 5 : dinners}.svg`} alt={`./images/${dinners}.svg`} 
            style={{
              backgroundColor: status
            }}
            className={`${styles.img_table}`} />
        </CustomTooltip>
        
    )
}

export default React.memo(Table);