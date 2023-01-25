import Image from 'next/image'

import * as S from './styled'

const Avatar = () => {
  return (
    <S.AvatarWrapper>
      <Image
        src="https://avatars.githubusercontent.com/u/118399079?v=4"
        alt="Minha foto de avatar"
        width={64}
        height={64}
      />
    </S.AvatarWrapper>
  )
}

export default Avatar
