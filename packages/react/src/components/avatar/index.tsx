import { User } from 'phosphor-react'
import type { ComponentProps } from 'react'
import {
	AvatarContainerStyle,
	AvatarFallback,
	AvatarImageStyle,
} from './styles'

export type AvatarProps = ComponentProps<typeof AvatarImageStyle>

export function Avatar(props: AvatarProps) {
	return (
		<AvatarContainerStyle>
			<AvatarImageStyle {...props} />
			<AvatarFallback delayMs={600}>
				<User />
			</AvatarFallback>
		</AvatarContainerStyle>
	)
}
