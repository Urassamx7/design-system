import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainerStyle = styled(Avatar.Root, {
	borderRadius: '$full',
	display: 'inline-block',
	width: '$12',
	height: '$12',
	overflow: 'hidden',
})

export const AvatarImageStyle = styled(Avatar.Image, {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: 'inherit',
	backgroundColor: '$gray600',
	color: '$gray800',

	svg: {
		width: '$6',
		height: '$6',
	},
})
