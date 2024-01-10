import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { ArrowDownToLine, Car, CheckCircle, Leaf, Link2, Link2Icon, Lock, Shield} from 'lucide-react'

const perks = [
  {
    name: 'Reliable Customer Services',
    Icon: ArrowDownToLine,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut similique mollitia libero? Nisi eveniet veniam incidunt, cumque exercitationem aliquam?'
  },
  {
    name: 'Experienced Services',
    Icon: Shield,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut similique mollitia libero? Nisi eveniet veniam incidunt, cumque exercitationem aliquam?'
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut similique mollitia libero? Nisi eveniet veniam incidunt, cumque exercitationem aliquam?'
  },
  {
    name: 'For The World',
    Icon: Leaf,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut similique mollitia libero? Nisi eveniet veniam incidunt, cumque exercitationem aliquam?'
  },
  {
    name: 'Privacy',
    Icon: Lock,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut similique mollitia libero? Nisi eveniet veniam incidunt, cumque exercitationem aliquam?'
  },
  {
    name: 'Friendly Client service',
    Icon: Link2Icon,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut similique mollitia libero? Nisi eveniet veniam incidunt, cumque exercitationem aliquam?'
  },
  
]


const Quality = () => {
  return (
   <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3'/>}
                  </div>
                </div>
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-semibold text-gray-900 '>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
          </MaxWidthWrapper>
          </section>
  )
}

export default Quality