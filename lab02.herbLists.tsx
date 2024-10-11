import { useState, useEffect } from "react";

export default function HerbLists(){
    const [loadStatus, setLoadStatus] = useState(true);
    const [herbData, setHerbData] = useState(_____);

    useEffect(()=>{
        try {
            const _____ = _____() => {
                const herb = _____ fetch(
                    '_____'
                );
                if(herb.ok){
                    const hbJson = await herb.json();
                    _____(hbJson);
                }else{
                    alert('[ERR] Unable to read data.');
                }
            }
            fetchHerbData().catch(console.error);
            setLoadStatus(false);
            console.log('Fetch herb data.');
        } catch (error) {
            alert('[ERR] An error occurs when reading the data.');
        }
    }, [loadStatus]);

    const handleDelete = (hbId) => {
        try {
            const fetchData = async() => {
                const hbData = await fetch(
                    `http://_____/${_____}`,
                    { 
                        method: '_____'
                    }
                );
                if(hbData.ok){
                    const myJson = await hbData.json();
                    alert(myJson.message);
                }else{
                    alert('[ERR] An error when deleting data.');
                }
            } 
            _____();
            setLoadStatus(true);
        } catch (error) {
            alert('[ERR] An error occurs when deleting the data.');
        }
    }
    
    return (
    <div className="m-3">
        <a href='_____'>[ เพิ่มข้อมูลสมุนไพร ]</a>
        <h1 className="font-bold">รายการสมุนไพร</h1>
        {
            herbData.map((h_item, index) => 
            <div key={index}>
                <div className="font-bold p-2 m-2 border-2 rounded-lg">
                    ชื่อสมุนไพร: {_____}<br/>
                    หมวดหมู่: {_____}<br/>
                    สรรพคุณ: {_____}<br/>
                    ผู้ผลิต: {_____}<br/>
                </div>
                <div className="p-2 m-2">
                    <a href={`/lab02/herbDetail/${_____}`}>[ รายละเอียด ]</a>
                    <a href={`/lab02/_____/${h_item.hbId}`}>[ แก้ไข ]</a>
                    <a href="#" onClick={(e) => _____(`${_____}`)}>[ ลบ ]</a>
                </div>
            </div>
            )
        }
    </div>
    );
}