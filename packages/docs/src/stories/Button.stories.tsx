import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@urassamx7/react'

export default {
	title: 'Button',
	component: Button,
	args: {
		children: 'Enviar',
	},
} as Meta

export const Primary: StoryObj = {}
export const Secondary: StoryObj = {}
