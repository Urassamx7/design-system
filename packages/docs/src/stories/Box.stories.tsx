import type { Meta, StoryObj } from '@storybook/react'
import { Box, type BoxProps, Text } from '@urassamx7/react'

export default {
	title: 'Surfaces/Box',
	component: Box,
	args: {
		children: <Text>Teste do elemento box</Text>
	},
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
