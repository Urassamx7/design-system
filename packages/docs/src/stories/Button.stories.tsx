import type { Meta, StoryObj } from '@storybook/react'
import { Button, type ButtonProps } from '@urassamx7/react'
import { ArrowRight } from 'phosphor-react'

export default {
	title: 'Form/Button',
	component: Button,
	args: {
		children: 'Send',
		disabled: false,
	},
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'tertiary', 'destructive'],
			control: {
				type: 'select',
				labels: 'Primary',
			},
		},
	},
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Secondary: StoryObj<ButtonProps> = {
	args: {
		variant: 'secondary',
		children: 'Create new',
	},
}
export const Tertiary: StoryObj<ButtonProps> = {
	args: {
		variant: 'tertiary',
		children: 'Cancel',
	},
}
export const Destructive: StoryObj<ButtonProps> = {
	args: {
		variant: 'destructive',
		children: 'Delete',
	},
}

export const Small: StoryObj<ButtonProps> = {
	args: {
		variant: 'primary',
		size: 'sm',
	},
}

export const WithIcon: StoryObj<ButtonProps> = {
	args: {
		variant: 'primary',
		children: (
			<>
				Next step <ArrowRight weight='bold' />
			</>
		),
	},
}

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		disabled: true,
	},
}
