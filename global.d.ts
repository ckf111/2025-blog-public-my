declare module '*.svg' {
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
	export default ReactComponent
}
declare module '*.svg?url' {
	const content: StaticImageData

	export default content
}

declare type NullableNumber = string | number | null
declare type NullableObject = Record<string, any> | null
declare type NullableArray = Record<string, any>[] | null
declare type Nullable<T> = T | null

declare module '*.png' {
	const src: string
	export default src
}

declare module '*.webp' {
	const src: string
	export default src
}

declare module '*.jpg' {
	const src: string
	export default src
}

declare module '*.jpeg' {
	const src: string
	export default src
}
