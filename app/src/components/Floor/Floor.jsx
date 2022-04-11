import React, { useState, useEffect } from "react";
import styles from "./Floor.module.scss";
import Table from "../Table/Table";
import floorJson from "../../utils/floor.json";
import ordersJson from "../../utils/orders.json";

const tables = [...floorJson];
let completed_orders = [];

const Floor = () => {
  const [orders, setOrder] = useState(ordersJson);
  const [result,setResult] = useState([]);

  useEffect(() => {
      setTimeout(ServeWaitingList, 2000);
  }, []);

  const ServeWaitingList = () => {
    const startTime = new Date().toLocaleString();
    setOrder((orders) => {
      const orderLeft = orders.filter((order) => {
        const tableIndex = tables.findIndex(
          (el) => el.Diners === order.Diners && !el.occuped
        );
        if (tableIndex > -1) {
          tables[tableIndex].occuped = {
            ...order,
            startTime,
          };
          return false;
        } else {
          return true;
        }
      });
      return orderLeft;
    });
  };

  const leaveTable = (index) => {
    const endTime = new Date().toLocaleString();
    tables[index].occuped.endTime=  endTime;
    const orderFinish = { ...tables[index] };

    completed_orders.push(orderFinish)
    
    delete tables[index].occuped;
    setResult(res => [...res, completed_orders])

    ServeWaitingList();
    WriteServedOrders();
  };

  const WriteServedOrders = () => {
    // console.log({completed_orders})
    console.log(result[0])
  }

  return (
    <div className={styles.container_floor}>
      {tables.map((el, index) => (
        <Table
          key={index}
          dinners={el.Diners}
          nbrTable={el.Table}
          occuped={el.occuped}
          leaveTable={() => leaveTable(index)}
        />
      ))}
    </div>
  );
};

export default React.memo(Floor);
