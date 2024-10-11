import { useState, useEffect } from "react";
import { useNavigate, useParams } from "@remix-run/react";

export default function HerbEditForm(){
    const navigate = useNavigate();
    const myParams = useParams();
    const hbId = myParams._____;
    const [hbData, setHerbData] = useState({
        _____
    });
    const [cateOption, setCateOption] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHerbData({
          ...hbData,
          [name]: value
        });
    };

    useEffect(() => {
        try {
            const fetchHerbData = async () => {
                const hbData = await fetch(`_____/${_____}`);
                if (hbData.ok) {
                    const hbJson = await hbData.json();
                    setHerbData(_____);
                    _____(hbJson.hbCate);
                    console.log(hbJson);
                } else {
                    alert('[ERR] Failed to loaded data.');
                }
            }

            _____().catch(console.error);
        } catch (error) {
            alert('[ERR] An error occurred while loading the data.');
        }
    }, []);

    const handleSubmit = async(e) => {
      e.preventDefault();
      if(confirm('Confirm the information update?')){
        const form = e.target;
        const formData = new FormData(form);  
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        
        try {
            const resHerb = await fetch('_____', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: _____.stringify(formJson),
            });
    
            if(resHerb.ok){
                const myJson = await resHerb.json();
                alert(`${myJson.message}`);
                navigate('_____');
            }else{
                alert('[ERR] Failed to update the form.');
            }
        } catch (error) {
            alert('[ERR] An error occurred while updatting the form.');
        }
        return true;
      }
    }

    return (
        <div className="m-3">
            <a href='/lab02/herbLists'>[ ข้อมูลสมุนไพร ]</a>
            <h1 className="font-bold">อัปเดตข้อมูลสมุนไพร</h1>
            <form method="POST" onSubmit={_____}>
            <input type="hidden" name="hbId" value={_____} />
            <label>ชื่อสมุนไพร (*)</label>:<br />
            <input type="text" name="hbName" id="hbName" className="border rounded-lg p-2 w-1/2"
            onChange={_____} value={_____} required /><br />
            <label>หมวดหมู่ (*)</label>:<br />
            <select name="hbCate" id="hbCate" className="border rounded-lg p-2 w-1/2"
            value={_____} onChange={_____} required>
                <option value="">-เลือกหมวดหมู่-</option>
                <option value={10}>ราก</option>
                <option value={20}>เปลือกไม้</option>
                <option value={30}>เนื้อไม้</option>
                <option value={40}>ใบ</option>
                <option value={50}>อื่น ๆ</option>
            </select><br />
            <label>สรรพคุณ (*)</label>:<br />
            <textarea rows={3} cols={50} name="hbProp" id="hbProp" className="border rounded-lg p-2 w-1/2"
                onChange={_____} value={_____} required
            /><br />
            <label>ผู้ผลิต</label>:<br />
            <input type="text" name="hbSupp" id="hbSupp" className="border rounded-lg p-2 w-1/2"
            onChange={_____} value={_____} /><br />
            <div className="p-3">
                <button type="_____">[ Submit ]</button>
                <button type="reset">[ Reset ]</button>
            </div>
            </form>
        </div>
    );
}