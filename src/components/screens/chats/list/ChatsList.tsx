import Field from '@/components/ui/field/Field'
import { Search } from 'lucide-react'
import React from 'react'

const ChatsList = () => {
  return (
    <div>
      <div className='border border-[#363636] rounded-[10px] pl-[8px] '>

      <Field placeholder='Search chats' Icon={Search}/>
      </div>
    </div>
  )
}

export default ChatsList