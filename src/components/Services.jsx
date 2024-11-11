import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import serviceImg1 from '../assets/service1.webp'
import serviceImg2 from '../assets/service2.webp'
import serviceImg3 from '../assets/service3.webp'
import serviceImg4 from '../assets/service4.webp'

const Services = () => {
  return (
    <div className='bg-[#f7f8fc]' id='services'>
      <div className='pt-28 px-4 container mx-auto'>
        <div className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What Can We Do Together?</h2>
          <p className='md:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vel blanditiis cum, error reprehenderit porro molestiae? Beatae, assumenda libero amet neque consequatur eligendi consectetur pariatur quia.</p>
        </div>

        {/* services category */}
        <div className='py-12 md:w-4/5 mx-auto'>
          <Tabs>
            <TabList className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </TabList>

            <TabPanel>
              <div className='flex flex-col md:flex-row gap-8 mt-8'>
                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Counseling</h3>
                  <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe quo eum a, rerum, veritatis maxime voluptatum vel eius velit sed, asperiores omnis natus repellendus!</p>
                  <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={serviceImg1} alt="" className='w-full h-auto rounded-2xl object-cover' />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='flex flex-col md:flex-row gap-8 mt-8'>
                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary mb-4'>Parenting Skills</h3>
                  <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe quo eum a, rerum, veritatis maxime voluptatum vel eius velit sed, asperiores omnis natus repellendus!</p>
                  <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={serviceImg2} alt="" className='w-full h-auto rounded-2xl object-cover' />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='flex flex-col md:flex-row gap-8 mt-8'>
                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
                  <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe quo eum a, rerum, veritatis maxime voluptatum vel eius velit sed, asperiores omnis natus repellendus!</p>
                  <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={serviceImg3} alt="" className='w-full h-auto rounded-2xl object-cover' />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='flex flex-col md:flex-row gap-8 mt-8'>
                <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                  <h3 className='text-3xl font-semibold text-primary mb-4'>Self-Confidence</h3>
                  <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe quo eum a, rerum, veritatis maxime voluptatum vel eius velit sed, asperiores omnis natus repellendus!</p>
                  <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                  <ul className='list-disc list-inside space-y-3'>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                  </ul>
                </div>
                <div className='md:w-1/2'>
                  <img src={serviceImg4} alt="" className='w-full h-auto rounded-2xl object-cover' />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services
