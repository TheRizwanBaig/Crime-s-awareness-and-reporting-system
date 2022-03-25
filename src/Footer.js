import React from 'react';
import './Footer.css';
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import {AiFillInstagram} from '@react-icons/all-files/ai/AiFillInstagram';
import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';

const Footer =() =>{
    return(

        <div className="Footercss">
            <Ticker isNewsTicker={true}  >
                                <NewsTicker id="1"  title="قومی اسمبلی کی قائمہ کمیٹی برائے اطلاعات نے سابق چیف جسٹس ثاقب نثار کو پیشی کیلئے پھر نوٹس بھیج دیا۔" url="https://urdu.geo.tv/latest/274496-" meta=" 15-1-2022 " />
                                <NewsTicker id="2"  title="اومی کرون کیسز میں اضافہ، تعلیمی اداروں کی بندش کی تجویز پر غور کیلئے اجلاس طلب" url=" https://urdu.geo.tv/latest/274500- " meta="15-1-2022" />
                                <NewsTicker id="3"  title="پاکستان اور ترکی کا انسانی اسمگلنگ کی روک تھام کیلئے مشترکہ اقدامات پر اتفاق" url=" https://urdu.geo.tv/latest/274498-" meta="15-1-2022" />
                                <NewsTicker id="4"  title="مانع حمل اشیاء پر بھی ٹیکس لگادیا، عمران جیسے کھلاڑی سے یہ امید نہیں تھی، بلاول" url=" https://urdu.geo.tv/latest/274494-" meta="15-1-2022" />
                                <NewsTicker id="5"  title="وزیر صحت سندھ کی ماسک کو ’ناں‘ کہنے والے شہریوں کیلئے وارننگ" url=" https://urdu.geo.tv/latest/274493-" meta="11:10:20" />
                                <NewsTicker id="6"  title="کراچی میں ڈکیتی کی دو وارداتوں میں لاکھوں روپے لوٹ لیےگئے، مزاحمت پر شہری قتل" url=" https://urdu.geo.tv/latest/274480-" meta="15-1-2022" />
            </Ticker>
               <center>
                    <a href="https://www.facebook.com/TheRizwanBaig/"target="_blank"><FaFacebookF size='1cm'/></a>
                    <a href="https://www.instagram.com/therizwanbaig/"target="_blank"><AiFillInstagram color='#8a3ab9' size='1cm'/></a>
                </center>
        </div>
    )
}
export default Footer;