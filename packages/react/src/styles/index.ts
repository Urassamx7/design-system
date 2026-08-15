import { createStitches, defaultThemeMap } from '@stitches/react'
import type {} from '@stitches/react/types/css'
import type {} from '@stitches/react/types/css-util'
import type {} from '@stitches/react/types/styled-component'
import type {} from '@stitches/react/types/stitches'
import type {} from '@stitches/react/types/theme'
import type {} from '@stitches/react/types/util'
import {
	colors,
	fontSizes,
	fonts,
	fontWeights,
	lineHeights,
	radii,
	space,
} from '@urassamx7/tokens'

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	config,
} = createStitches({
	themeMap: {
		...defaultThemeMap,
		height: 'space',
		width: 'space',
	},
	theme: {
		colors,
		fontSizes,
		fontWeights,
		fonts,
		lineHeights,
		radii,
		space,
	},
})
