// Write your code here
import {useState} from 'react'
import {LockedDevice} from './styledComponents'

const Unlock = () => {
  const [lockStatus, setLock] = useState(false)
  console.log(lockStatus)
  const chooseImage = lockStatus
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altStatus = lockStatus ? 'unlock' : 'lock'
  const lockedOrNot = lockStatus ? 'Unlocked' : 'Locked'
  const lockButton = lockStatus ? 'Lock' : 'Unlock'
  const onChangeLock = () => {
    setLock(prevLock => !prevLock)
  }
  return (
    <div>
      <img src={chooseImage} alt={altStatus} />
      <LockedDevice>Your Device is {lockedOrNot}</LockedDevice>
      <button type="button" onClick={onChangeLock}>
        {lockButton}
      </button>
    </div>
  )
}
export default Unlock
