
import styled from 'styled-components';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaidIcon from '@mui/icons-material/Paid';
import EventIcon from '@mui/icons-material/Event';
import Image from 'next/image';
import { ethers } from 'ethers';
import { useState } from 'react';
import Link from 'next/link'
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div>
    <div className = "HomeWrapper">
      <div className ="FilterWrapper">
        <div className="Filteraction" style ={{fontSize:40}}/>
        <div className='Category'>Intern</div>
        <div className='Category'>H.R</div>
        <div className='Category'>Web Developer</div>
        <div className='Category'>S.D.E</div>
      </div>
      <div className='Cardsswapper'>
        < div className='Card'>
          <div className='CardImg'>
            {/* <Image layout = "fill" src ={"/https://th.bing.com/th/id/OIP.0Zpp9TcUcM7bD7q_qHmI1QHaLE?pid=ImgDet&rs=1"}/> */}
          </div>
          < div className="Title">
            Treatment for my dog
          </div>
          < div className='CardData'>
            <div className = "Text">Owner<AccountBoxIcon/></div>
            <div className = "Text">0XC5C8...E27<AccountBoxIcon/></div>
          </div>   
          <div className ="CardData" >
            <div className = "Text">Amount<AccountBoxIcon/></div>
            <div className = "Text">100 MATIC<AccountBoxIcon/></div>
          </div>
          < div className= "CardData">
            <div className = "Text"><EventIcon /></div>
            <div className = "Text">2/2/2002 , 4:00:09 PM</div>
          </div>
          <Button>
            ADD MORE EMPLOYEE
          </Button>
        </div>
      </div>
    </div>
    </div>
  )
}
