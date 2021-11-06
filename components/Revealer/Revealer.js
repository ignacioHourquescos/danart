import s from './Revelaer.module.scss';
import React, { useState, useEffect,useRef } from 'react';
import useMouse from '@react-hook/mouse-position'

const Revealer = ({img, height, width}) =>{
   const ref = React.useRef(null)
   const mouse = useMouse(ref, {
     enterDelay: 100,
     leaveDelay: 100,
   })


      return (
         // You must provide the ref to the element you're tracking the
         // mouse position of
         <div className={s.container} ref={ref}>
           <div className={s.spotlight}
           
              style={{left:mouse.x, top:mouse.y, background:`url(${img}) 0% 0% no-repeat`, height:height, width:width}}
            ></div>
     
         </div>


   )
}

export default Revealer;