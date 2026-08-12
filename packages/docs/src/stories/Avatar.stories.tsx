import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, type AvatarProps } from '@urassamx7/react'

export default {
	title: 'Data display/Avatar',
	component: Avatar,
	args: {
		src: 'https://github.com/urassamx7.png',
		alt: 'Marvin Mussacate',
	},
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
	args: {
		src: undefined,
	},
}
