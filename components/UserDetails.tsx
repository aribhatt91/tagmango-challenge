'use client';
import { useUser } from '@/providers/UserProvider';
import Chip from './Chip';
import { Bell, Fire } from './icons';
import Avatar from './Avatar';
import ButtonIcon from './ButtonIcon';

const UserDetailSkeletion = () => {
  return <div className='inline-flex gap-2'>
    <Chip className='w-16 animate-pulse'></Chip>
    <Chip className='w-8 animate-pulse'></Chip>
    <Chip className='w-8 animate-pulse'></Chip>
  </div>
}
function UserDetails() {
  const { user, pending, error } = useUser();
  if(error) {
    return (
      <div></div>
    )
  }
  if(pending) {
    return <UserDetailSkeletion/>
  }
  return (
    <div className='inline-flex gap-2'>
      <Chip className='w-16 gap-1'>
        <Fire />
        <span className='font-medium text-base'>{user?.points}</span>
      </Chip>
      <ButtonIcon transparent={true} icon={<Bell/>} bordered={true} className='w-8 h-8 border-[rgba(8, 0, 49, 0.27)]' />
      <Avatar src={user?.avatar || ''} alt={user?.name || ''} className='w-8 h-8' width={32} height={32} />
    </div>
  )
}

export default UserDetails;