import type { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
	fontFamily: '$default',
	backgroundColor: '$ignite300',
	borderRadius: '$md',
	padding: '$2 $4',
	border: 0,
	fontWeight: '$bold',
	color: '$white',
	variants: {
		size: {
			default: {
				fontSize: 14,
				padding: '$2 $4',
			},
			small: {
				fontSize: 12,
				padding: '$1 $2',
			},
			big: {
				fontSize: 16,
				padding: '$3 $6',
			},
		},
	},

	defaultVariants: {
		size: 'default',
	},
})

export type ButtonProps = ComponentProps<typeof Button>
