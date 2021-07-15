// import Accordion from "react-bootstrap/Accordion";
import { useState } from 'react';
import Button from 'react-bootstrap/Button'

import Collapse from 'react-bootstrap/Collapse'

export default function About(props){
    return<>
    {/* דף אודות החנות המכיל 3 תכנית שמתחלפים (היסטוריית החנות , הסיבות שגרמו
        לפתיחת החנות , מצב החנות עכשיו) ע"י ריאקט צילדרן.
    */}
    <h1>...אודותינו</h1>
<div>
<ShowAbout text={"...החנות שלנו הוקמה ב 1999 ומאז פוקדים אותה ללא הפסקה אתם מוזמנים"}><h4>היסטורית החנות</h4></ShowAbout>
</div>
   <div><ShowAbout text={"?כמעט כולם צריכים משקפיים , לא"}><h4>הסיבות שגרמו לפתיחת החנות</h4></ShowAbout></div>
   <div><ShowAbout text={"!החנות משגשגת מאד"}><h4>מצב החנות עכשיו</h4></ShowAbout></div>

    </>
}

 function ShowAbout(props){
    const [open, setOpen] = useState(false);
    return<>
    
    {/* About */}
    <Button className="btn btn-warning" style={{width:"1000px",height:"150px"}}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {props.children}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         <h3>{props.text}</h3>
        </div>
      </Collapse>

      
    </>
}
