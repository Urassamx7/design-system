import { createStitches, defaultThemeMap } from '@stitches/react'
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
