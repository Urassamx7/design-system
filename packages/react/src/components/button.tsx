import type { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
	all: 'unset',

	borderRadius: '$sm',
	fontSize: '$sm',
	fontWeight: '$medium',
	fontFamily: '$default',
	textAlign: 'center',
	minWidth: 120,
	boxSizing: 'border-box',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	gap: '$2',
	cursor: 'pointer',

	transition: 'all 0.2s',

	'&:disabled': {
		cursor: 'not-allowed',
	},
	svg: {
		width: '$4',
		height: '$4',
	},

	variants: {
		variant: {
			primary: {
				color: '$white',
				backgroundColor: '$ignite500',

				'&:not(:disabled):hover': {
					backgroundColor: '$ignite300',
				},
				'&:disabled': {
					backgroundColor: '$gray200',
				},
			},

			secondary: {
				color: '$ignite300',
				backgroundColor: 'transparent',
				border: '2px solid $ignite500',

				'&:not(:disabled):hover': {
					backgroundColor: '$ignite500',
					color: '$white',
				},
				'&:disabled': {
					color: '$gray200',
					borderColor: '$gray200',
				},
			},

			tertiary: {
				color: '$gray200',
				backgroundColor: 'transparent',
				border: 'none',

				'&:not(:disabled):hover': {
					color: '$gray100',
				},
				'&:disabled': {
					color: '$gray600',
				},
			},

			destructive: {
				color: '$white',
				backgroundColor: '$red500',
				border: '2px solid $red500',

				'&:not(:disabled):hover': {
					backgroundColor: '$red700',
				},
				'&:disabled': {
					backgroundColor: '$red200',
				},
			},
		},

		size: {
			md: {
				padding: '0 $4',
				height: 46,
			},
			sm: {
				padding: '0 $2',
				height: 38,
			},
		},
	},

	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
})

export type ButtonProps = ComponentProps<typeof Button> & {
	as?: ElementType
}

Button.displayName = 'Button'