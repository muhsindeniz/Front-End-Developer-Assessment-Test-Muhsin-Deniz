export interface Variant {
  text?: string | undefined
  value: string
  color: string
}

export interface ColorVariantProps {
  colorVariants: Variant[]
  onChange: (selectedVariant: Variant) => void
  value: string | number
}
