import { useAppSelector } from '../../hooks'
import { selectFriendlist } from '../../store/friendListSlice'
import * as S from './styles'

const FriendList = () => {
  const friendlist = useAppSelector(selectFriendlist)

  return (
    <S.StyledList>
      {friendlist.map((friend, index) => {
        return <S.StyledListItem key={index}>{friend.name}</S.StyledListItem>
      })}
    </S.StyledList>
  )
}

export default FriendList
