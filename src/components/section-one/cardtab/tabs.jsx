import React, { useContext } from 'react';
import { AppBar, Box, Tab, TableCell, Tabs } from '@mui/material';
import jadidAdabiyoti from "../../../data"
import { useState } from 'react';
import 'swiper/css'
import SectionOne from '../section-one';
import Card from './card';
import Card1 from './Alltab';
import { Link } from 'react-router-dom';
import { Context } from '../../contex';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'
import { borderBottom } from '@mui/system';


function Tablar(props) {
  const [data, setData] = useState([])
  const { orders, setOrders } = useContext(Context);
  let allCategories = []
  jadidAdabiyoti.map((adab) => {
    allCategories.push(adab.type)
  })
  let settedCategories = new Set(allCategories)
  let categories = [...settedCategories]
  let change = (e) => {
    setData(jadidAdabiyoti.filter((kitob) => (kitob.type == e.target.textContent)));
  }
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      

        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <AppBar  className='appbar  flex justify-center' color='transparent' position='static'>
                    <TabList indicatorColor='transparent' onChange={handleChange}>
                        <Tabs >
                            <Tab  className='Tab1' onClick={change} value="1" label='All' />
                        </Tabs>
                        <Tabs  value="1">
                            {
                              categories && categories.map((e, i) => (
                                <Tab className='Tab1' value="2" onClick={change}  label={e} />
                              ))
                            }
                        </Tabs>
                        
                    </TabList>
                </AppBar>
                <TabPanel className='flex flex-wrap' value='1'>
                    {
                        jadidAdabiyoti.map((e, i) => (
                            <div key={i}>
                                <Card1  name={e.name} img={e.images} des={e.desc} year={e.year}  />
                            </div>
                        ))
                    }
                </TabPanel>
                <TabPanel className='flex flex-wrap' value="2">
                    {
                        data.map((e, i) => (
                        <div key={i}>
                            <Card  name={e.name} img={e.images} des={e.desc} year={e.year}  />
                        </div>
                        ))
                    }
                </TabPanel>
            </TabContext>
        </Box>

    </>
  );
}

export default Tablar;